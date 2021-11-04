import React from 'react';
import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Colors } from '../../../styles/index';

import Section from '../section/Section';

import firestore from '@react-native-firebase/firestore';

function PageCardBody({ description, date, type, link }) {
    const calcTime = () => {
        const now = firestore.Timestamp.now().toDate();
        const today = {
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDay(),
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };

        const postingDate = date.toDate();
        const posting = {
            year: postingDate.getFullYear(),
            month: postingDate.getMonth(),
            day: postingDate.getDay(),
            hours: postingDate.getHours(),
            minutes: postingDate.getMinutes(),
            seconds: postingDate.getSeconds(),
        };

        let diff = 0;
        if (today.year !== posting.year) {
            diff = today.year - posting.year;
            return `${diff} year${diff > 1 ? 's' : ''}`;
        } else if (today.month !== posting.month) {
            diff = today.month - posting.month;
            return `${diff} month${diff > 1 ? 's' : ''}`;
        } else if (today.day !== posting.day) {
            diff = today.day - posting.day;
            return `${diff} day${diff > 1 ? 's' : null}`;
        } else if (today.hours !== posting.hours) {
            diff = today.hours - posting.hours;
            return `${diff} hour${diff > 1 ? 's' : null}`;
        } else if (today.minutes !== posting.minutes) {
            diff = today.minutes - posting.minutes;
            return `${diff} minute${diff > 1 ? 's' : null}`;
        } else {
            diff = today.seconds - posting.seconds;
            return `${diff} second${diff > 1 ? 's' : null}`;
        }
    };

    const openApplication = async () => {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
            await Linking.openURL(link);
        } else {
            Alert.alert(`Unable to open this URL: ${link}`);
        }
    };

    return (
        <View style={styles.container}>
            {type === 'job' ? (
                <View style={styles.header}>
                    <Button
                        style={styles.button}
                        onPress={() => openApplication()}>
                        Apply
                    </Button>
                    <Text style={styles.time}>Posted {calcTime(date)} ago</Text>
                </View>
            ) : null}

            {Object.keys(description).map(key => {
                return (
                    <Section
                        key={key}
                        type={typeof description[key]}
                        header={key}
                        body={description[key]}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GREEN_LIGHT,
        padding: 20,
    },
    time: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: Colors.GRAY_VERY_DARK,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: Colors.GRAY_DARK,
        paddingTop: 5,
        paddingBottom: 5,
    },
});

export default PageCardBody;
