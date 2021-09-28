import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from '../../styles/index';

function Login({ navigation }) {
    // Username input handler
    const [username, setUsername] = React.useState(null);
    const handleUsername = username => {
        setUsername(username);
    };

    // Password input handler
    const [password, setPassword] = React.useState(null);
    const handlePassword = password => {
        setPassword(password);
    };

    // Submits login credentials
    const handleLogin = () => {
        const user = {
            username: username,
            password: password,
        };

        // For debugging purposes
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

        navigation.navigate('App', user);

        // Clears form inputs on submission
        setUsername(null);
        setPassword(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GREENSPACE</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    onChangeText={username => handleUsername(username)}
                    value={username}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    secureTextEntry={true}
                    onChangeText={password => handlePassword(password)}
                    value={password}
                />
                <Text style={styles.link}>Forgot Password?</Text>
                <Button
                    title="Sign In"
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={() => handleLogin()}
                />
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
    loginForm: {},
    input: {
        backgroundColor: Colors.GRAY_LIGHT,
        fontSize: 20,
        fontWeight: '500',
        borderRadius: 8,
        elevation: 3,
        marginBottom: 15,
        padding: 10,
    },
    link: { color: Colors.BLACK, textAlign: 'center', fontSize: 14 },
    buttonContainer: {
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: Colors.GREEN,
    },
    buttonTitle: { fontSize: 17 },
});

export default Login;
