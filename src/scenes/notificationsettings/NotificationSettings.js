import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
