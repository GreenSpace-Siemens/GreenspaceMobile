import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/index';
import Swiper from 'react-native-deck-swiper';

import { jobs } from '../../database/Database';
import PageCard from '../../components/organisms/pagecard/PageCard';

function Home({ navigation }) {
    const saveJob = jobID => {
        console.log(`Saved Job! with ID: ${jobID}`);
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
                <Swiper
                    cards={jobs}
                    renderCard={job => {
                        return (
                            <PageCard
                                header={job.title}
                                subheader={job.company}
                                imgsrc={job.picture}
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
    body: { flex: 8, padding: 0 },
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
