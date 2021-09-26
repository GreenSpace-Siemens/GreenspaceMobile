// * Dashboard, Home, Messages, Saved, Profile, EditProfile
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import About from '../components/organisms/about/About';
import Applied from '../../components/applied/Applied';
import Cover from '../components/organisms/cover/Cover';
import Education from '../components/organisms/education/Education';
import Experiences from '../components/organisms/experiences/Experiences';
import Saved from '../components/organisms/saved/Saved';
import Skills from '../components/organisms/skills/Skills';

// Scenes
import Account from '../scenes/account/Account';
import Email from '../scenes/email/Email';
import Home from '../scenes/home/Home';
import Messages from '../scenes/messages/Messages';
import Notifications from '../scenes/notifications/Notifications';
import NotificationSettings from '../scenes/notificationsettings/NotificationSettings';
import Password from '../scenes/password/Password';
import Phone from '../scenes/phone/Phone';
import Profile from '../scenes/profile/Profile';
import Search from '../scenes/search/Search';
import Settings from '../scenes/settings/Settings';
import Subscription from '../scenes/subscription/Subscription';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}

function MessageNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
}

function SavedNavigator() {
    return (
        <TopTab.Navigator initialRouteName="Saved">
            <TopTab.Screen name="Saved" component={Saved} />
            <TopTab.Screen name="Applied" component={Applied} />
        </TopTab.Navigator>
    );
}

function ProfileNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
                name="EditProfileNavigator"
                component={EditProfileNavigator}
            />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen
                name="NotificationSettings"
                component={NotificationSettings}
            />
            <Stack.Screen name="Subscription" component={Subscription} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="Password" component={Password} />
        </Stack.Navigator>
    );
}

function EditProfileNavigator() {
    return (
        <TopTab.Navigator initialRouteName="Cover">
            <TopTab.Screen name="Cover" component={Cover} />
            <TopTab.Screen name="About" component={About} />
            <TopTab.Screen name="Skills" component={Skills} />
            <TopTab.Screen name="Experiences" component={Experiences} />
            <TopTab.Screen name="Education" component={Education} />
        </TopTab.Navigator>
    );
}

function AppNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="HomeNavigator" component={HomeNavigator} />
            <BottomTab.Screen
                name="MessageNavigator"
                component={MessageNavigator}
            />
            <BottomTab.Screen name="Search" component={Search} />
            <BottomTab.Screen
                name="SavedNavigator"
                component={SavedNavigator}
            />
            <BottomTab.Screen
                name="ProfileNavigator"
                component={ProfileNavigator}
            />
        </BottomTab.Navigator>
    );
}

export default AppNavigator;
