import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

import Header from '../../components/molecules/header/Header';

function Password({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Password"
                leftButton="back"
                rightButton="check"
            />
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
        borderTopWidth: 0.5,
        borderTopColor: '#525B76',
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
    editContainer: { height: '100%', backgroundColor: '#ffffff', padding: 20 },
    aboutContainer: {
        height: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
    },
    coverInput: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#525B76',
        width: '88%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0FA97D',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    coverLabel: { color: '#525B76', fontWeight: 'bold', fontSize: 16 },
    link: { color: '#0FA97D', fontWeight: 'bold', fontSize: 18 },
});

export default Password;
