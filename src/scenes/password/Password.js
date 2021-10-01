import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

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
                    placeholderTextColor={Colors.BLACK}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="New Password"
                    style={styles.passwordInput}
                    placeholderTextColor={Colors.BLACK}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.passwordInput}
                    placeholderTextColor={Colors.BLACK}
                    secureTextEntry={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
    },
    passwordInput: {
        backgroundColor: Colors.WHITE,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
        fontSize: 15,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
    },
});

export default Password;
