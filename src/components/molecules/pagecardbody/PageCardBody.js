import React from 'react';
import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Colors } from '../../../styles/index';

import Section from '../section/Section';

import CalcTime from '../../../modules/calctime/CalcTime';

function PageCardBody({ description, date, type, link }) {
    const openApplication = async () => {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
            await Linking.openURL(link);
        } else {
            // NOTE: This is for production
            // Alert.alert(`Unable to open this URL: ${link}`);
            Alert.alert(`You have successfully applied to the job!`);
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
                    <Text style={styles.time}>
                        Posted {CalcTime(date, true)} ago
                    </Text>
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
