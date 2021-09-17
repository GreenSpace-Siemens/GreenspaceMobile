import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Child Components
import Search from '../search/Search';
import Main from '../main/Main';
import Notifications from '../notifications/Notifications';
import Recipients from '../recipients/Recipients';
import SavedJobs from '../savedjobs/SavedJobs';
import Applied from '../applied/Applied';

const Stack = createNativeStackNavigator();

// Stack Navigators will route to other pages or components
function Home() {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    animation: 'slide_from_right',
                    headerTitleStyle: { color: '#525B76' },
                    headerTintColor: '#525B76',
                }}
            />
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
                    headerTitleStyle: { color: '#525B76' },
                }}
            />
        </Stack.Navigator>
    );
}

const TopTab = createMaterialTopTabNavigator();

function Saved() {
    return (
        <View style={{ height: '100%' }}>
            <TopTab.Navigator initialRouteName="Jobs">
                <TopTab.Screen name="Jobs" component={SavedJobs} />
                <TopTab.Screen name="Applied" component={Applied} />
            </TopTab.Navigator>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
            <Text>Profile</Text>
        </View>
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
                    },
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
                    name="Profile"
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

export default Dashboard;
