import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

import { profile } from '../../database/Database';

import PageCard from '../../components/organisms/pagecard/PageCard';

import auth from '@react-native-firebase/auth';

function Profile({ navigation }) {
    const {
        firstName,
        lastName,
        occupation,
        company,
        location,
        picture,
        skills,
    } = profile;

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login');
                console.log('User signed out!');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Profile"
                leftButton="edit"
                rightButton="settings"
            />
            <View style={styles.body}>
                <PageCard
                    header={`${firstName} ${lastName}`}
                    subheader={`${occupation} at ${company}`}
                    imgsrc={picture}
                    skills={skills}
                    location={location}
                />
                <Button style={styles.button} onPress={() => handleSignOut()}>
                    Sign out
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: { flex: 9, padding: 15 },
});

export default Profile;
