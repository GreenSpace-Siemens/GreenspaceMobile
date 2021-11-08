import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button, Input } from 'native-base';
import { Colors } from '../../styles/index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

    const createAccount = async () => {
        if (
            firstName == null ||
            lastName === null ||
            email === null ||
            password === null ||
            confirmPass === null ||
            firstName == '' ||
            lastName === '' ||
            email === '' ||
            password === '' ||
            confirmPass === ''
        ) {
            Alert.alert('Missing fields');
        }
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
            <View>
                <Text style={styles.title}>CREATE AN ACCOUNT</Text>
            </View>
            <View style={styles.body}>
                <Input
                    onChangeText={text => setFirstName(text)}
                    placeholder="First Name"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    InputLeftElement={
                        <MaterialIcons
                            name="person"
                            size={20}
                            color={Colors.GREEN}
                        />
                    }
                    variant="underlined"
                />

                <Input
                    onChangeText={text => setLastName(text)}
                    placeholder="Last Name"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    InputLeftElement={
                        <MaterialIcons
                            name="person"
                            size={20}
                            color={Colors.GREEN}
                        />
                    }
                    variant="underlined"
                />

                <Input
                    onChangeText={text => setEmail(text)}
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    autoCapitalize="none"
                    InputLeftElement={
                        <MaterialIcons
                            name="mail"
                            size={20}
                            color={Colors.GREEN}
                        />
                    }
                    variant="underlined"
                />

                <Input
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    type="password"
                    style={[styles.input]}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    InputLeftElement={
                        <MaterialIcons
                            name="lock"
                            size={20}
                            color={Colors.GREEN}
                        />
                    }
                    variant="underlined"
                />

                <Input
                    onChangeText={text => setConfirmPass(text)}
                    placeholder="Confirm Password"
                    type="password"
                    style={[styles.input]}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    InputLeftElement={
                        <MaterialIcons
                            name="lock"
                            size={20}
                            color={Colors.GREEN}
                        />
                    }
                    variant="underlined"
                />

                <Button style={styles.button} onPress={() => createAccount()}>
                    CONTINUE
                </Button>
                <View>
                    <Text
                        onPress={() => navigation.goBack()}
                        style={styles.link}>
                        Already have an account?
                    </Text>
                </View>
                {/* <Text style={styles.link} onPress={() => setOpen(true)}>
                    {dateText}
                </Text> */}
                {/* <DatePicker
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
                /> */}
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
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 40,
        paddingRight: 40,
    },
    body: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '70%',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '800',
        color: Colors.GREEN,
    },
    input: {
        fontSize: 20,
        fontWeight: '500',
        borderRadius: 8,
        borderBottomColor: Colors.GRAY_MEDIUM,
    },
    signInRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
        backgroundColor: Colors.GREEN,
    },
});

export default Register;
