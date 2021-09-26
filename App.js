import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// * Components
import { Cover, About, Experiences, Education } from './components/forms/Forms';
import Applied from './components/applied/Applied';
import SavedJobs from './components/savedjobs/SavedJobs';

// * Scenes
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main'; // ! Home
import Notifications from './components/notifications/Notifications';
import Recipients from './components/recipients/Recipients'; // ! Messages
import ProfilePage from './components/profilepage/ProfilePage'; // ! Profile
import { NotificationsSettings } from './components/settings/Settings';
import { Subscription } from './components/settings/Settings';
import { Settings } from './components/settings/Settings';
import { Account } from './components/account/Account';
import {
    ChangeEmail,
    ChangePhone,
    ChangePassword,
} from './components/forms/Forms';
import Search from './components/search/Search';

// * Navigations
import Dashboard from './components/dashboard/Dashboard';

// * Not Sure

const Stack = createNativeStackNavigator();

function App() {
    return (
        <SafeAreaProvider>
            <Search />
            {/* <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer> */}
        </SafeAreaProvider>
    );
}

export default App;
