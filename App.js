import React from 'react';
import { Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// * Components
import { Cover, About, Experiences, Education } from './components/forms/Forms';
import Applied from './components/applied/Applied';
import SavedJobs from './components/savedjobs/SavedJobs';

// * Navigations
import Dashboard from './components/dashboard/Dashboard';

// * Not Sure

// import AuthNavigator from './src/navigations/auth-navigator';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/* <Stack.Navigator initialRouteName="Login">
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
                </Stack.Navigator> */}
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
