import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Child Components
import Search from '../search/Search';
import Main from '../main/Main';
import Notifications from '../notifications/Notifications';
import Recipients from '../recipients/Recipients';
import SavedJobs from '../savedjobs/SavedJobs';
import Applied from '../applied/Applied';
import ProfilePage from '../profilepage/ProfilePage';
import EditProfile from '../editprofile/EditProfile';

// Account Settings
import {
    Settings,
    NotificationsSettings,
    Subscription,
} from '../settings/Settings';

import { Account } from '../account/Account';

import { ChangeEmail, ChangePassword, ChangePhone } from '../forms/Forms';

import { AddSkill, AddExperience, AddEducation } from '../modals/Modals';

const Stack = createNativeStackNavigator();

// Stack Navigators will route to other pages or components
function Home() {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}

function Messages() {
    return (
        <Stack.Navigator initialRouteName="MessagesNav">
            <Stack.Screen
                name="Messages"
                component={Recipients}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

const TopTab = createMaterialTopTabNavigator();

function Saved() {
    return (
        <View style={{ height: '100%' }}>
            <View style={styles.header}>
                <Text style={styles.title}>Saved</Text>
            </View>
            <View style={styles.body}>
                <TopTab.Navigator
                    initialRouteName="Jobs"
                    screenOptions={{
                        tabBarPressColor: '#ffffff',
                        tabBarIndicatorStyle: { backgroundColor: '#0FA97D' },
                    }}>
                    <TopTab.Screen
                        name="Jobs"
                        component={SavedJobs}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <Text
                                        style={{
                                            color: focused
                                                ? '#0FA97D'
                                                : '#525B76',
                                            fontWeight: '500',
                                        }}>
                                        Jobs
                                    </Text>
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="Applied"
                        component={Applied}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <Text
                                        style={{
                                            color: focused
                                                ? '#0FA97D'
                                                : '#525B76',
                                            fontWeight: '500',
                                        }}>
                                        Applied
                                    </Text>
                                );
                            },
                        }}
                    />
                </TopTab.Navigator>
            </View>
        </View>
    );
}

function Profile() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="NotificationsSettings"
                component={NotificationsSettings}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="Subscription"
                component={Subscription}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="ChangeEmail"
                component={ChangeEmail}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="ChangePhone"
                component={ChangePhone}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{
                    headerTitleStyle: { color: '#525B76' },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="AddSkill" component={AddSkill} />
                <Stack.Screen name="AddExperience" component={AddExperience} />
                <Stack.Screen name="AddEducation" component={AddEducation} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();

function Dashboard({ navigation, route }) {
    const { username, password } = route.params;

    return (
        <View style={{ height: '100%' }}>
            <BottomTab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        elevation: 0,
                        borderTopWidth: 0,
                        paddingBottom: 10,
                    },
                    tabBarShowLabel: false,
                }}>
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <Entypo name="home" color={'#0FA97D'} size={28} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="MessagesNav"
                    component={Messages}
                    options={{
                        tabBarLabel: 'Messages',
                        tabBarIcon: () => (
                            <Entypo
                                name="message"
                                color={'#0FA97D'}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: () => (
                            <FontAwesome
                                name="search"
                                color={'#0FA97D'}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Saved"
                    component={Saved}
                    options={{
                        tabBarLabel: 'Saved',
                        tabBarIcon: () => (
                            <FontAwesome
                                name="star"
                                color={'#0FA97D'}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="ProfileNav"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Saved',
                        tabBarIcon: () => (
                            <Ionicons
                                name="md-person-circle-sharp"
                                color={'#0FA97D'}
                                size={30}
                            />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
    },
    body: { flex: 13 },
});

export default Dashboard;
