import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function Messages() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Messages</Text>
                <Entypo
                    name="new-message"
                    color="#525B76"
                    size={25}
                    style={styles.icon}
                />
            </View>
            <View style={styles.body}>
                <Text>Recipents</Text>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        marginRight: 83,
    },
    icon: { marginRight: 30 },
    body: { flex: 9 },
});

export default Messages;
