import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ChangeEmail({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Email</Text>
                <MaterialIcons
                    name="check"
                    size={45}
                    color="#0FA97D"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.body}>
                <TextInput
                    placeholder="Enter or Update email"
                    style={styles.input}
                    placeholderTextColor="#8D8D8D"
                />
            </View>
        </View>
    );
}

export function ChangePhone({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Phone</Text>
                <MaterialIcons
                    name="check"
                    size={45}
                    color="#0FA97D"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.body}>
                <TextInput
                    placeholder="Enter or Update phone number"
                    style={styles.input}
                    placeholderTextColor="#8D8D8D"
                />
            </View>
        </View>
    );
}

export function ChangePassword({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Phone</Text>
                <MaterialIcons
                    name="check"
                    size={45}
                    color="#0FA97D"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.body}>
                <TextInput
                    placeholder="Current Password"
                    style={styles.passwordInput}
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="New Password"
                    style={styles.passwordInput}
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.passwordInput}
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                />
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
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
    },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        fontSize: 15,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
    },
    passwordInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        fontSize: 15,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
    },
});
