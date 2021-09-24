import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function Account() {
    return (
        <View>
            <Text>Account</Text>
        </View>
    );
}

export function NotificationsSettings() {
    return (
        <View>
            <Text>Notifications</Text>
        </View>
    );
}

export function Subscription() {
    return (
        <View>
            <Text>Subscription</Text>
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
    icon: { marginLeft: 12 },
    body: { flex: 9 },
    link: {
        color: '#0FA97D',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        padding: 10,
        fontWeight: '500',
        fontSize: 18,
    },
});
