import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Modals
import AddEducation from '../components/organisms/addeducation/AddEducation';
import AddExperience from '../components/organisms/addexperience/AddExperience';
import AddSkill from '../components/organisms/addskill/AddSkill';

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
                <Stack.Group
                    screenOptions={{
                        animation: 'fade_from_bottom',
                        presentation: 'transparentModal',
                    }}>
                    <Stack.Screen name="AddSkill" component={AddSkill} />
                    <Stack.Screen
                        name="AddEducation"
                        component={AddEducation}
                    />
                    <Stack.Screen
                        name="AddExperience"
                        component={AddExperience}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
