import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

function Login({ navigation }) {
  const [username, setUsername] = React.useState(null);
  const handleUsername = event => {
    let username = event.target.value;
    setUsername(username);
  };

  const [password, setPassword] = React.useState(null);
  const handlePassword = event => {
    let password = event.target.value;
    setPassword(password);
  };

  const handleLogin = event => {
    const user = {
      username: username,
      password: password,
    };

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    navigation.navigate('Dashboard');
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
          placeholderTextColor="#8D8D8D"
          onChange={event => handleUsername(event)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#8D8D8D"
          onChange={event => handlePassword(event)}
        />
        <Text style={styles.link}>Forgot Password?</Text>
        <Button
          title="Sign In"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={event => handleLogin(event)}
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
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 130,
    paddingBottom: 200,
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '800',
    color: '#0FA97D',
  },
  loginForm: {},
  input: {
    backgroundColor: '#EFEFEF',
    fontSize: 20,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 15,
    padding: 10,
  },
  link: { color: '#000000', textAlign: 'center' },
  buttonContainer: {
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0FA97D',
  },
  buttonTitle: { fontSize: 17 },
});

export default Login;
