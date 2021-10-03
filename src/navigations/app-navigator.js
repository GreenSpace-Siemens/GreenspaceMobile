// * Dashboard, Home, Messages, Saved, Profile, EditProfile
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../styles/index';

// Components
import About from '../components/organisms/about/About';
import Applied from '../components/organisms/applied/Applied';
import Background from '../components/organisms/background/Background';
import Cover from '../components/organisms/cover/Cover';
import Saved from '../components/organisms/saved/Saved';
import TopTabLabel from '../components/atoms/toptablabel/TopTabLabel';

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

function HomeNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                presentation: 'transparentModal',
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}

function MessageNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
}

function SavedNavigator({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Saved</Text>
            </View>
            <View style={styles.body}>
                <TopTab.Navigator
                    initialRouteName="Saved"
                    screenOptions={{
                        tabBarPressColor: Colors.WHITE,
                        tabBarIndicatorStyle: { backgroundColor: Colors.GREEN },
                    }}>
                    <TopTab.Screen
                        name="Saved"
                        component={Saved}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Jobs'}
                                    />
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
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Applied'}
                                    />
                                );
                            },
                        }}
                    />
                </TopTab.Navigator>
            </View>
        </View>
    );
}

function ProfileNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                presentation: 'transparentModal',
            }}>
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

function EditProfileNavigator({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('Profile')}
                />
                <Text
                    style={{
                        flex: 5,
                        textAlign: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: Colors.GRAY_DARK,
                    }}>
                    Edit Profile
                </Text>
                <MaterialIcons
                    name="check"
                    size={40}
                    color={Colors.GREEN}
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={styles.body}>
                <TopTab.Navigator
                    initialRouteName="Cover"
                    screenOptions={{
                        tabBarPressColor: Colors.WHITE,
                        tabBarIndicatorStyle: {
                            backgroundColor: Colors.GREEN,
                        },
                    }}>
                    <TopTab.Screen
                        name="Cover"
                        component={Cover}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Cover'}
                                    />
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
                                    <TopTabLabel
                                        focused={focused}
                                        label={'About'}
                                    />
                                );
                            },
                        }}
                    />
                    <TopTab.Screen
                        name="Skills"
                        component={Background}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Skills'}
                                    />
                                );
                            },
                        }}
                        initialParams={{ link: 'Add Skill' }}
                    />
                    <TopTab.Screen
                        name="Experiences"
                        component={Background}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Experience'}
                                    />
                                );
                            },
                        }}
                        initialParams={{ link: 'Add Experience' }}
                    />
                    <TopTab.Screen
                        name="Education"
                        component={Background}
                        options={{
                            tabBarLabel: ({ focused }) => {
                                return (
                                    <TopTabLabel
                                        focused={focused}
                                        label={'Education'}
                                    />
                                );
                            },
                        }}
                        initialParams={{ link: 'Add Education' }}
                    />
                </TopTab.Navigator>
            </View>
        </View>
    );
}

function AppNavigator({ navigation }) {
    return (
        <View style={{ height: '100%' }}>
            <BottomTab.Navigator
                initialRouteName="HomeNavigator"
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
                    name="HomeNavigator"
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: () => (
                            <Entypo
                                name="home"
                                color={Colors.GREEN}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="MessageNavigator"
                    component={MessageNavigator}
                    options={{
                        tabBarIcon: () => (
                            <Entypo
                                name="message"
                                color={Colors.GREEN}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome
                                name="search"
                                color={Colors.GREEN}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="SavedNavigator"
                    component={SavedNavigator}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome
                                name="star"
                                color={Colors.GREEN}
                                size={28}
                            />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="ProfileNavigator"
                    component={ProfileNavigator}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="md-person-circle-sharp"
                                color={Colors.GREEN}
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
    container: { height: '100%' },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: Colors.WHITE,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.GRAY_DARK,
    },
    body: { flex: 13 },
});

export default AppNavigator;
