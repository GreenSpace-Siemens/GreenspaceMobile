import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/index';
import Swiper from 'react-native-deck-swiper';

// This is dummy image
import img from './twitter.jpeg';

import PageCard from '../../components/organisms/pagecard/PageCard';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function Home({ navigation }) {
    const [jobs, setJobs] = React.useState(null);
    const onResult = QuerySnapshot => {
        const queries = [];

        console.log('Total Jobs: ' + QuerySnapshot.size);

        QuerySnapshot.forEach(docSnap => {
            const data = docSnap.data();
            const job = {
                ref: docSnap.ref.path,
                title: data.title,
                company: data.company,
                location: data.location,
            };

            queries.push(job);
        });

        setJobs(queries);
    };

    const onError = error => {
        console.error(error);
    };

    const fetchJobs = async () => {
        await firestore().collection('Jobs').onSnapshot(onResult, onError);
        // .get()
        // .then(snapshot => {
        //     let queries = [];
        //     snapshot.forEach(docSnap => {
        //         const data = docSnap.data();
        //         const job = {
        //             ref: docSnap.ref.path,
        //             title: data.title,
        //             company: data.company,
        //             location: data.location,
        //         };

        //         queries.push(job);
        //     });

        //     setJobs(queries);
        // });
    };

    React.useEffect(() => {
        fetchJobs();
    }, []);

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
                    onPress={() => navigation.navigate('Notifications')}
                />
            </View>
            <View style={styles.body}>
                {jobs === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : (
                    <Swiper
                        cards={jobs}
                        renderCard={job => {
                            return (
                                <PageCard
                                    header={job.title}
                                    subheader={job.company}
                                    imgsrc={img}
                                    location={job.location}
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
        alignItems: 'center',
        justifyContent: 'center',
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
