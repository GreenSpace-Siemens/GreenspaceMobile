import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Navigator for signin.
import AuthNavigator from './auth-navigator';

// App Navigator for the rest of the app.
import AppNavigator from './app-navigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            {/* Begins with Auth for signin or register navigator. */}
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
