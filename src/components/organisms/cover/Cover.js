import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Colors } from '../../../styles/index';

function Cover({ navigation }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Occupation</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Company</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Location</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    input: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_DARK,
        width: '88%',
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.GREEN,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    label: { color: Colors.GRAY_DARK, fontWeight: 'bold', fontSize: 16 },
});

export default Cover;
