// * Dashboard, Home, Messages, Saved, Profile, EditProfile
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Custom helper modules
import { Colors } from '../styles/index';
import Context, { Provider } from '../modules/context/Context';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Components
import About from '../components/organisms/about/About';
import AppliedJobs from '../components/molecules/appliedjobs/AppliedJobs';
import Background from '../components/organisms/background/Background';
import Cover from '../components/organisms/cover/Cover';
import SavedJobs from '../components/molecules/savedjobs/SavedJobs';
import TopTabLabel from '../components/atoms/toptablabel/TopTabLabel';
import Panel from '../components/molecules/panel/Panel';

// Scenes
import Account from '../scenes/account/Account';
import Email from '../scenes/email/Email';
import Page from '../scenes/page/Page';
import Home from '../scenes/home/Home';
import Messages from '../scenes/messages/Messages';
import Notifications from '../scenes/notifications/Notifications';
import NotificationSettings from '../scenes/notificationsettings/NotificationSettings';
import Password from '../scenes/password/Password';
import Phone from '../scenes/phone/Phone';
import Postings from '../scenes/postings/Postings';
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
            <Stack.Screen name="Postings" component={Postings} />
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
    );
}

function MessageNavigator({ navigation, route }) {
    return (
        <Stack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
    );
}

function SearchNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                presentation: 'transparentModal',
            }}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
    );
}

function SavedTabs({ navigation }) {
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
                        tabBarIndicatorStyle: {
                            backgroundColor: Colors.GREEN,
                        },
                    }}>
                    <TopTab.Screen
                        name="Saved"
                        component={SavedJobs}
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
                        component={AppliedJobs}
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

function SavedNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="SavedTabs"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                presentation: 'transparentModal',
            }}>
            <Stack.Screen name="SavedTabs" component={SavedTabs} />
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
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
                initialParams={{ test: 1 }}
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
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
    );
}

function EditProfileNavigator({ navigation }) {
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [occupation, setOccupation] = React.useState(null);
    const [company, setCompany] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    const [changes, setChanges] = React.useState(false);
    const [about, setAbout] = React.useState(null);
    const panel = React.useContext(Context);

    const states = {
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        occupation: occupation,
        setOccupation: setOccupation,
        company: company,
        setCompany: setCompany,
        location: location,
        setLocation: setLocation,
        setChanges: setChanges,
        about: about,
        setAbout: setAbout,
        panel: panel,
    };

    const saveChanges = async () => {
        if (changes === true) {
            await firestore()
                .collection('Users')
                .doc(auth().currentUser.uid)
                .update({
                    'name.firstName': firstName,
                    'name.lastName': lastName,
                    'occupation.title': occupation,
                    'occupation.location': location,
                    'occupation.company': company,
                    'description.About Me': about,
                });
        }

        navigation.navigate('Profile');
    };

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
                    style={{
                        flex: 1,
                    }}
                    onPress={() => saveChanges()}
                />
            </View>
            <Provider value={states}>
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
                        {/* NOTE: Removing Education and Experiences
                    
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
                    /> */}
                    </TopTab.Navigator>
                </View>
            </Provider>
        </View>
    );
}

function AppNavigator({ navigation }) {
    const [panel, setPanel] = React.useState(null);

    return (
        <View
            style={{
                height: '100%',
            }}>
            <Provider value={panel}>
                <BottomTab.Navigator
                    initialRouteName="HomeNavigator"
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            elevation: 0,
                            borderTopWidth: 0,
                            paddingBottom: 0,
                        },
                        tabBarShowLabel: false,
                        tabBarActiveBackgroundColor: Colors.GRAY_LIGHT,
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
                        name="SearchNavigator"
                        component={SearchNavigator}
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
                <Panel setPanel={setPanel} />
            </Provider>
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
