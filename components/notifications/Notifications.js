import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function Notifications() {
    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
});

export default Notifications;
