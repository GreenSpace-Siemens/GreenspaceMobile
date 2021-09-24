import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function AddSkill({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Skill Modal</Text>
        </View>
    );
}

export function AddExperience({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Experience Modal</Text>
        </View>
    );
}

export function AddEducation({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Education Modal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
    },
});
