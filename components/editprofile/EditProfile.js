import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Cover, About, Skills, Experiences, Education } from '../forms/Forms';

const TopTab = createMaterialTopTabNavigator();

function EditProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    onPress={() => navigation.navigate('Profile')}
                />
                <Text style={styles.title}>Edit Profile</Text>
                <MaterialIcons
                    name="check"
                    size={45}
                    color="#0FA97D"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={styles.body}>
                <TopTab.Navigator
                    screenOptions={{
                        tabBarPressColor: '#ffffff',
                        tabBarIndicatorStyle: {
                            backgroundColor: '#0FA97D',
                        },
                    }}>
                    <TopTab.Screen
                        name="Cover"
                        component={Cover}
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
                                        Cover
                                    </Text>
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="About"
                        component={About}
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
                                        About
                                    </Text>
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="Skills"
                        component={Skills}
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
                                        Skills
                                    </Text>
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="Experience"
                        component={Experiences}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <Text
                                        style={{
                                            color: focused
                                                ? '#0FA97D'
                                                : '#525B76',
                                            fontWeight: '500',
                                            width: 71,
                                            textAlign: 'center',
                                            margin: 0,
                                        }}>
                                        Experience
                                    </Text>
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="Education"
                        component={Education}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <Text
                                        style={{
                                            color: focused
                                                ? '#0FA97D'
                                                : '#525B76',
                                            fontWeight: '500',
                                            width: 71,
                                            textAlign: 'center',
                                        }}>
                                        Education
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

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
    },
    body: { flex: 9 },
});

export default EditProfile;
