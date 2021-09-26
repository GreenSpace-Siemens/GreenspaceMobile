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

import RootNavigator from './src/navigations/index';

function App() {
    return (
        <SafeAreaProvider>
            <RootNavigator />
            {/* <Cover /> */}
        </SafeAreaProvider>
    );
}

export default App;
