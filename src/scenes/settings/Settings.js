import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Settings({ navigation }) {
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
                    onPress={() => navigation.navigate('NotificationSettings')}>
                    Notifications
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Subscription')}>
                    Subscription
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        zIndex: -1,
    },
    icon: { marginLeft: 12 },
    body: {
        flex: 9,
    },
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
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    switchLabel: { flex: 1, fontWeight: '500', fontSize: 18, color: '#0FA97D' },
    switch: { flex: 1 },
});

export default Settings;
