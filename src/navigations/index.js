import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = NavigationContainer(
    {
        Auth: AuthNavigator,
        App: AppNavigator,
    },
    {
        initialRouteName: 'Auth',
    },
);
