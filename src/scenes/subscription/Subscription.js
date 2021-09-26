import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 250,
                        color: '#0FA97D',
                    }}>
                    Subscriptions coming soon!
                </Text>
            </View>
        </View>
    );
}
