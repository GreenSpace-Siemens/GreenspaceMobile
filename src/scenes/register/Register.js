import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';

function Register({ navigation }) {
    // Username input handler
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [confirmPass, setConfirmPass] = React.useState(null);
    const [part1comp, setPart1Comp] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [dateText, setDateText] = React.useState(null);

    const createUserObject = () => {
        firestore()
            .collection('Users')
            .doc(auth().currentUser.uid)
            .set({
                name: { firstName: firstName, lastName: lastName },
                birthday: date,
                profileCreationLevel: 0,
            })
            .then(() => {
                navigateToSkillBuilder();
            });
    };

    const navigateToSkillBuilder = () => {
        navigation.navigate('SkillBuilder');
    };

    const moveToPart2 = () => {
        // validate part1 fields and check if email exists
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                setDateText('Select Your Birthday');
                setPart1Comp(!part1comp);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            {part1comp != true && (
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Join Greenspace</Text>
                    </View>
                    <View style={styles.registerPart1}>
                        <Input
                            onChangeText={text => setEmail(text)}
                            placeholder="Email"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                        <Input
                            onChangeText={text => setPassword(text)}
                            placeholder="Password"
                            type="password"
                            style={styles.input}
                        />
                        <Input
                            onChangeText={text => setConfirmPass(text)}
                            placeholder="Confirm Password"
                            type="password"
                            style={styles.input}
                        />
                        <Button
                            style={styles.button}
                            onPress={() => moveToPart2()}>
                            Continue
                        </Button>
                        <View style={styles.signInRow}>
                            <Text>Already have an account? </Text>
                            <Text
                                onPress={() => navigation.navigate('Login')}
                                style={styles.link}>
                                Sign In
                            </Text>
                        </View>
                    </View>
                </View>
            )}
            {part1comp == true && (
                <>
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome to Greenspace</Text>
                    </View>
                    <View style={styles.registerPart1}>
                        <Input
                            onChangeText={text => setFirstName(text)}
                            placeholder="First Name"
                            style={styles.input}
                        />
                        <Input
                            onChangeText={text => setLastName(text)}
                            placeholder="Last Name"
                            style={styles.input}
                        />
                        <Text style={styles.link} onPress={() => setOpen(true)}>
                            {dateText}
                        </Text>
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date"
                            title="Select Birthday"
                            onConfirm={date => {
                                setOpen(false);
                                setDate(date);
                                setDateText(date.toDateString().slice(4));
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                        <Button
                            style={styles.button}
                            onPress={() => createUserObject()}>
                            Resume Builder ->
                        </Button>
                        <View style={styles.signInRow}>
                            <Text
                                onPress={() => navigation.navigate('Login')}
                                style={styles.link}>
                                Cancel
                            </Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: 150,
        paddingBottom: 300,
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        backgroundColor: Colors.WHITE,
    },
    title: {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: '600',
        color: Colors.GREEN,
    },
    input: {
        backgroundColor: Colors.GRAY_LIGHT,
        borderBottomWidth: 2,
        fontSize: 20,
        fontWeight: '500',
        borderRadius: 8,
        borderWidth: 0,
        elevation: 3,
        marginBottom: 15,
        padding: 10,
    },
    signInRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    link: { color: Colors.GREEN, textAlign: 'center', fontSize: 14 },
    button: {
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        elevation: 3,
        backgroundColor: Colors.GREEN,
    },
    buttonTitle: { fontSize: 17 },
});

export default Register;
