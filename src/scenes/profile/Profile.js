import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';

function Profile({ navigation }) {

    const handleSignOut = () => {
      auth().signOut().then(() => {
        navigation.navigate('Login');
        console.log('User signed out!')
      })
      .catch(error => {
        console.error(error);
      });
    }

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Profile"
                leftButton="edit"
                rightButton="settings"
            />
            <View style={styles.body}>
                <Text>Body</Text>
                <Button style={styles.button} onPress={() => handleSignOut()}>
                    Sign out
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: { flex: 9 },
});

export default Profile;
