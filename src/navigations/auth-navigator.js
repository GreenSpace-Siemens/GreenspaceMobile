// * Login and Register
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../scenes/login/Login';
import Register from '../scenes/register/Register';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
