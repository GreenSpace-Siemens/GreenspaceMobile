import React from 'react';
import { Alert, View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Login({ navigation }) {
    // Username input handler
    const [username, setUsername] = React.useState(null);

    // Password input handler
    const [password, setPassword] = React.useState(null);

    const handleNavigation = profileCreationLevel => {
        switch (profileCreationLevel) {
            case 0:
                navigation.navigate('SkillBuilder');
                break;
            case 1:
                navigation.navigate('Discipline');
                break;
            default:
                navigation.navigate('App', user);
                break;
        }
    };

    // Submits login credentials
    const handleLogin = () => {
        if (
            username === null ||
            password === null ||
            username === '' ||
            password === ''
        ) {
            Alert.alert('Missing email and/or password');
            return;
        }

        auth()
            .signInWithEmailAndPassword(username, password)
            // auth()
            // .signInWithEmailAndPassword('nolandonley14@gmail.com', 'buddie09')
            .then(() => {
                // const user = auth().currentUser;
                // const users = firestore().collection('Users').doc(user.uid);
                // firestore()
                //     .collection('Users')
                //     .doc(user.uid)
                //     .get()
                //     .then(documentSnapshot => {
                //         handleNavigation(
                //             documentSnapshot['_data']['profileCreationLevel'],
                //         );
                //     });
                navigation.navigate('App');
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    console.log('That password is wrong!');
                    Alert.alert('The password is invalid.');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert('The email is invalid.');
                }
            });

        // Clears form inputs on submission
        // setUsername(null);
        // setPassword(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GREENSPACE</Text>
            </View>
            <View>
                <Input
                    onChangeText={text => setUsername(text)}
                    placeholder="Username"
                    style={styles.input}
                    autoCapitalize="none"
                />
                <Input
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    style={styles.input}
                />
                <Text style={styles.link}>Forgot Password?</Text>
                <Button style={styles.button} onPress={() => handleLogin()}>
                    SIGN IN
                </Button>
                <Text
                    onPress={() => navigation.navigate('Register')}
                    style={styles.link}>
                    Create Account?
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 130,
        paddingBottom: 200,
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        backgroundColor: Colors.WHITE,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '800',
        color: Colors.GREEN,
    },
    input: {
        fontSize: 20,
        fontWeight: '500',
        borderRadius: 8,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_MEDIUM,
        marginBottom: 15,
        padding: 10,
    },
    link: {
        color: Colors.GRAY_VERY_DARK,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        elevation: 3,
        backgroundColor: Colors.GREEN,
    },
    buttonTitle: { fontSize: 17 },
});

export default Login;
