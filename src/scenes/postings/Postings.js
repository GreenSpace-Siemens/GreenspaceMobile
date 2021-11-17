import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { Button, ScrollView } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

import firestore from '@react-native-firebase/firestore';

import Posting from '../../components/atoms/posting/Posting';

function Postings({ navigation, route }) {
    const { header, jobs } = route.params;
    const [postings, setPostings] = React.useState(null);

    React.useEffect(() => {
        const queries = [];
        const fetchPostings = async () => {
            for (let i = 0; i < jobs.length; i++) {
                const jobRef = await firestore()
                    .collection('Jobs')
                    .doc(jobs[i])
                    .get();

                const data = jobRef.data();

                const job = {
                    title: data.title,
                    company: data.company,
                    location: data.location,
                    date: data.time_stamp,
                    applicants: data.applicants,
                    link: data.link,
                    description: data.description,
                };
                queries.push(job);
            }

            setPostings(queries);
        };

        fetchPostings();

        return () => {
            setPostings(null);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={header}
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <Button style={styles.button}>
                    <Text style={styles.buttonTitle}>Create New</Text>
                </Button>
                {postings === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : (
                    <ScrollView style={styles.postings}>
                        {postings.map((posting, i) => {
                            return (
                                <Posting
                                    key={i}
                                    navigation={navigation}
                                    posting={posting}
                                />
                            );
                        })}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexGrow: 9,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 30,
        elevation: 3,
        backgroundColor: Colors.GREEN,
        width: 250,
    },
    buttonTitle: { fontSize: 20, fontWeight: 'bold', color: Colors.WHITE },
    postings: { width: '100%', paddingLeft: 17, paddingRight: 17 },
});

export default Postings;
