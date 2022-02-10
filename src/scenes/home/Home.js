import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/index';
import Swiper from 'react-native-deck-swiper';

import MenuCard from '../../components/atoms/menucard/MenuCard';

// This is dummy image
import img from './twitter.jpeg';

import PageCard from '../../components/organisms/pagecard/PageCard';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function Home({ navigation }) {
    const [userType, setUserType] = React.useState(null);
    const [jobs, setJobs] = React.useState(null);
    const userID = auth().currentUser.uid;

    const fetchUserData = async () => {
        await firestore()
            .collection('Users')
            .doc(userID)
            .get()
            .then(snapshot => {
                const data = snapshot.data();

                if (data.userType !== 0) {
                    setJobs(data.postings);
                }

                setUserType(data.userType);
            });
    };

    const contains = (saved, query) => {
        const queryRef = query.ref;

        for (let i = 0; i < saved.length; i++) {
            const savedRef = saved[i].job;
            if (queryRef === savedRef) {
                return true;
            }
        }

        return false;
    };

    const onResult = async QuerySnapshot => {
        const queries = [];

        QuerySnapshot.forEach(docSnap => {
            const data = docSnap.data();

            const job = {
                ref: docSnap.ref.path,
                title: data.title,
                company: data.company,
                location: data.location,
                description: data.description,
                date: data.time_stamp,
                link: data.link,
            };

            queries.push(job);
        });

        const user = await firestore().collection('Users').doc(userID).get();
        const userData = user.data();

        const saved = [
            ...userData.favorites.applied,
            ...userData.favorites.saved,
        ];

        let diff = queries.filter(query => !contains(saved, query));

        setJobs(queries);
    };

    const onError = error => {
        console.error(error);
    };

    React.useEffect(() => {
        fetchUserData();

        if (userType === 0) {
            const fetchJobs = async () => {
                await firestore()
                    .collection('Jobs')
                    .onSnapshot(onResult, onError);
            };

            fetchJobs();
        }
    }, [userType]);

    const saveJob = async jobID => {
        console.log(`Saved Job! with ID: ${jobID}`);

        const userID = auth().currentUser.uid;
        await firestore()
            .collection('Users')
            .doc(userID)
            .update({
                'favorites.saved': firestore.FieldValue.arrayUnion({
                    job: jobs[jobID].ref,
                }),
            });
    };

    const deleteJob = jobID => {
        console.log(`Not interested in job with ID: ${jobID}`);
    };

    const printUsers = () => {
        navigation.navigate('Notifications');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GREENSPACE</Text>
                <Button
                    title={
                        <Ionicons
                            name="notifications"
                            size={25}
                            color={Colors.GREEN}
                        />
                    }
                    buttonStyle={styles.button}
                    onPress={() => printUsers()}
                />
            </View>
            <View
                style={[
                    styles.body,
                    userType === null || userType === 0
                        ? { alignItems: 'center', justifyContent: 'center' }
                        : {
                              alignItems: 'flex-start',
                              // Flex start and padding for this one item.
                              justifyContent: 'flex-start',
                              paddingLeft: 25,
                              paddingRight: 25,
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                          },
                ]}>
                {userType === null || jobs === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : userType === 0 ? jobs.length > 0 ? (
                    <Swiper
                        cards={jobs}
                        renderCard={job => {
                            return (
                                <PageCard
                                    jobRef={job.ref}
                                    header={job.title}
                                    subheader={job.company}
                                    imgsrc={img}
                                    location={job.location}
                                    description={job.description}
                                    date={job.date}
                                    link={job.link}
                                    type="job"
                                />
                            );
                        }}
                        backgroundColor={Colors.WHITE}
                        cardVerticalMargin={0}
                        verticalSwipe={false}
                        horizontalThreshold={100}
                        cardStyle={{ height: '97%' }}
                        onSwipedRight={jobID => saveJob(jobID)}
                        onSwipedLeft={jobID => deleteJob(jobID)}
                    />
                  ) : (
                    <Text style={styles.subtitle}>There are no more new jobs for you right now.</Text>
                ) : (
                    <MenuCard
                        navigation={navigation}
                        header="Active Jobs"
                        value={jobs.length}
                        jobs={jobs}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        backgroundColor: Colors.WHITE,
    },
    header: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: 17,
    },
    body: {
        flex: 8,
        padding: 0,
    },
    subtitle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      color: Colors.GRAY
    },
    title: {
        flex: 1,
        textAlign: 'right',
        fontSize: 30,
        fontWeight: '800',
        color: Colors.GREEN,
        marginRight: '16%',
    },
    button: { backgroundColor: 'transparent' },
});

export default Home;
