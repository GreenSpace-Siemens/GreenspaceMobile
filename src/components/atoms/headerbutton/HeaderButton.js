import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function HeaderButton({ navigation, type }) {
    const backIcon = (
        <MaterialIcons
            name="chevron-left"
            size={45}
            color="#525B76"
            style={styles.icon}
            onPress={() => navigation.goBack()}
        />
    );

    const checkIcon = (
        <MaterialIcons
            name="check"
            size={45}
            color="#0FA97D"
            style={styles.icon}
            onPress={() => navigation.goBack()}
        />
    );

    const composeIcon = (
        <Entypo
            name="new-message"
            color="#525B76"
            size={25}
            style={styles.icon}
        />
    );

    const editIcon = (
        <MaterialIcons
            name="edit"
            size={30}
            color="#525B76"
            style={styles.icon}
            onPress={() => navigation.navigate('EditProfileNavigator')}
        />
    );

    const settingsIcon = (
        <Ionicons
            name="settings-sharp"
            size={30}
            color="#525B76"
            style={styles.icon}
            onPress={() => navigation.navigate('Settings')}
        />
    );

    const threeDotsIcon = (
        <Entypo
            name="dots-three-vertical"
            size={27}
            color="#525B76"
            style={styles.icon}
        />
    );

    if (type === 'edit') {
        return editIcon;
    } else if (type === 'settings') {
        return settingsIcon;
    } else if (type === 'back') {
        return backIcon;
    } else if (type === 'compose') {
        return composeIcon;
    } else if (type === 'threedots') {
        return threeDotsIcon;
    } else if (type === 'check') {
        return checkIcon;
    } else {
        return <View style={styles.icon}></View>;
    }
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#525B76',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        marginLeft: 84,
    },
    icon: { flex: 1, textAlign: 'center' },
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

export default HeaderButton;
