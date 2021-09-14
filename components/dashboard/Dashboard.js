import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

function Messages() {
    return (
        <View>
            <Text>Messages</Text>
        </View>
    );
}

function SavedJobs() {
    return (
        <View>
            <Text>Saved Jobs</Text>
        </View>
    );
}

function Profile() {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function Dashboard({ navigation, route }) {
    const { username, password } = route.params;

    return (
        <View style={{ height: '100%' }}>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Messages" component={Messages} />
                <Tab.Screen name="SavedJobs" component={SavedJobs} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Dashboard;
