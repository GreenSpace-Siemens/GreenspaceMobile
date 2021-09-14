import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from '../search/Search';

const Stack = createNativeStackNavigator();

// Stack Navigators will route to other pages or components
function Home() {
    return (
        <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
            <Text>Home</Text>
        </View>
    );
}

function Messages() {
    return (
        <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
            <Text>Messages</Text>
        </View>
    );
}

function SavedJobs() {
    return (
        <View style={{ height: '100%', backgroundColor: '#ffffff' }}>
            <Text>Saved Jobs</Text>
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

const Tab = createBottomTabNavigator();

function Dashboard({ navigation, route }) {
    const { username, password } = route.params;

    return (
        <View style={{ height: '100%' }}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        elevation: 0,
                        borderTopWidth: 0,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <Entypo name="home" color={'#0FA97D'} size={28} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Messages"
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
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarLabel: 'Messages',
                        tabBarIcon: () => (
                            <FontAwesome
                                name="search"
                                color={'#0FA97D'}
                                size={28}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SavedJobs"
                    component={SavedJobs}
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
                <Tab.Screen
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
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Dashboard;
