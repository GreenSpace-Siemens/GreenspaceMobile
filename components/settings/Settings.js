import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ChangeEmail() {
    return (
        <View>
            <Text>Email</Text>
        </View>
    );
}

export function ChangePhone() {
    return (
        <View>
            <Text>Phone</Text>
        </View>
    );
}

export function ChangePassword() {
    return (
        <View>
            <Text>Password</Text>
        </View>
    );
}

export function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={styles.icon}
                    onPress={() => navigation.navigate('Settings')}
                />
                <Text style={styles.title}>Account</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.subtitle}>Login Information</Text>
                <Button
                    title={
                        <View style={styles.buttonTitle}>
                            <Text style={styles.buttonLabel}>Email</Text>
                            <Text style={styles.buttonSubLabel}>
                                johndoe@siemens.com {'>'}
                            </Text>
                        </View>
                    }
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('ChangeEmail')}
                />
                <Button
                    title={
                        <View style={styles.buttonTitle}>
                            <Text style={styles.buttonLabel}>Phone</Text>
                            <Text style={styles.buttonSubLabel}>
                                +1 (123) 456 - 7890 {'>'}
                            </Text>
                        </View>
                    }
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('ChangePhone')}
                />
                <Button
                    title={
                        <View style={styles.buttonTitle}>
                            <Text style={styles.buttonLabel}>Password</Text>
                            <Text style={styles.buttonSubLabel}>{'>'}</Text>
                        </View>
                    }
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('ChangePassword')}
                />
                <Text style={styles.subtitle}>Accounts</Text>
            </View>
        </View>
    );
}

export function NotificationsSettings({ navigation }) {
    const [enabled, setEnabled] = React.useState([false, false, false]);

    // Sets switches on and off
    const toggleSwitch = id => {
        let newEnabled = [...enabled];
        newEnabled[id] = !newEnabled[id];
        setEnabled(newEnabled);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={styles.icon}
                    onPress={() => navigation.navigate('Settings')}
                />
                <Text style={styles.title}>Notifications</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>Messages</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: '#D4D1D1', true: '#0FA97D' }}
                        thumbColor="#ffffff"
                        onValueChange={() => toggleSwitch(0)}
                        value={enabled[0]}
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>New Jobs</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: '#D4D1D1', true: '#0FA97D' }}
                        thumbColor="#ffffff"
                        onValueChange={() => toggleSwitch(1)}
                        value={enabled[1]}
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>Application Activity</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: '#D4D1D1', true: '#0FA97D' }}
                        thumbColor="#ffffff"
                        onValueChange={() => toggleSwitch(2)}
                        value={enabled[2]}
                    />
                </View>
            </View>
        </View>
    );
}

export function Subscription({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={styles.icon}
                    onPress={() => navigation.navigate('Settings')}
                />
                <Text style={styles.title}>Subscription</Text>
            </View>
            <View style={styles.body}>
                <Text>Subscription</Text>
            </View>
        </View>
    );
}

export function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={styles.icon}
                    onPress={() => navigation.navigate('Profile')}
                />
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.body}>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Account')}>
                    Account
                </Text>
                <Text
                    style={styles.link}
                    onPress={() =>
                        navigation.navigate('NotificationsSettings')
                    }>
                    Notifications
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Subscription')}>
                    Settings
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#525B76',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        marginLeft: 84,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
    },
    icon: { marginLeft: 12 },
    body: { flex: 9, padding: 10 },
    link: {
        color: '#0FA97D',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        padding: 10,
        fontWeight: '500',
        fontSize: 18,
    },
    toggle: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    switchLabel: { flex: 1, fontWeight: '500', fontSize: 18, color: '#0FA97D' },
    switch: { flex: 1 },
    buttonContainer: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingTop: 13,
        paddingBottom: 13,
    },
    buttonTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonLabel: {
        fontSize: 18,
    },
    buttonSubLabel: {
        color: '#8D8D8D',
    },
});
