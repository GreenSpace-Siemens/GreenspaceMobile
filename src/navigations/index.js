import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Signin and remainder of the App
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Auth"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="App" component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
