import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

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
