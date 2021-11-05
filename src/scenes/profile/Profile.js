import React, {useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

import { profile } from '../../database/Database';

import PageCard from '../../components/organisms/pagecard/PageCard';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Profile({ navigation }) {

  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [occupation, setOccupation] = React.useState(null);
  const [company, setCompany] = React.useState(null);
  const [city, setCity] = React.useState(null);

  const fetchData = async() => {
    const userID = auth().currentUser.uid;
    const user = firestore().collection('Users').doc(userID);
    const userData = await user.get();
    setFirstName(userData['_data']['name']['firstName']);
    setLastName(userData['_data']['name']['lastName']);
    setOccupation(userData['_data']['occupation']['title']);
    setCompany(userData['_data']['occupation']['company']);
    setCity(userData['_data']['occupation']['location']);
  }
  useEffect(() => {
    fetchData();
  }, [])

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
                    header={firstName + ' ' + lastName}
                    subheader={occupation + ' at ' + company}
                    imgsrc={profile.picture}
                    education={profile.education}
                    location={city}
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
