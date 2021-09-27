import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HeaderButton from '../../atoms/headerbutton/HeaderButton';

function Header({ navigation, title, leftButton, rightButton }) {
    return (
        <View style={styles.header}>
            <HeaderButton navigation={navigation} type={leftButton} />
            <Text style={styles.title}>{title}</Text>
            <HeaderButton navigation={navigation} type={rightButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        flex: 5,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
    },
    icon: { marginLeft: 12 },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    accountInformation: { padding: 8 },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
    },
    buttonTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonLabel: { fontSize: 18 },
    buttonSubLabel: { color: '#8D8D8D' },
    buttonContainer: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingTop: 13,
        paddingBottom: 13,
    },
    signout: { fontSize: 18, fontWeight: 'bold', width: '100%' },
    signoutButton: { padding: 13, backgroundColor: '#B4E4D6' },
});

export default Header;
