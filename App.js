import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

// Main controller for the entire app.
import RootNavigator from './src/navigations/index';

function App() {
    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <RootNavigator />
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}

export default App;
