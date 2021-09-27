import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigations/index';

function App() {
    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    );
}

export default App;
