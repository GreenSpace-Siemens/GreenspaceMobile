import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import * as tf from '@tensorflow/tfjs'

// Main controller for the entire app.
import RootNavigator from './src/navigations/index';

import model from './src/model/model.js';

function App() {
	model();
    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <RootNavigator />
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}

export default App;
