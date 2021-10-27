import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../styles/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function ToolBarButton({ navigation, type, toggleModal, skill }) {
    // NOTE: Temporary
    const goBack = () => {
        if (toggleModal === undefined) {
            navigation.goBack();
        } else {
            toggleModal(skill);
        }
    };

    const backIcon = (
        <MaterialIcons
            name="chevron-left"
            size={45}
            color={Colors.GRAY_DARK}
            style={styles.icon}
            onPress={() => goBack()}
        />
    );

    const cancelIcon = (
        <MaterialIcons
            name="cancel"
            size={35}
            color={Colors.RED}
            style={styles.icon}
            onPress={() => goBack()}
        />
    );

    const checkIcon = (
        <MaterialIcons
            name="check"
            size={40}
            color={Colors.GREEN}
            style={styles.icon}
            onPress={() => goBack()}
        />
    );

    const composeIcon = (
        <Entypo
            name="new-message"
            color={Colors.GRAY_DARK}
            size={25}
            style={styles.icon}
            onPress={() => goBack()}
        />
    );

    const editIcon = (
        <MaterialIcons
            name="edit"
            size={30}
            color={Colors.GRAY_DARK}
            style={styles.icon}
            onPress={() => navigation.navigate('EditProfileNavigator')}
        />
    );

    const plusIcon = (
        <MaterialCommunityIcons
            name="plus"
            size={45}
            color={Colors.GREEN}
            style={styles.icon}
            onPress={() => goBack()}
        />
    );

    const settingsIcon = (
        <Ionicons
            name="settings-sharp"
            size={30}
            color={Colors.GRAY_DARK}
            style={styles.icon}
            onPress={() => navigation.navigate('Settings')}
        />
    );

    const threeDotsIcon = (
        <Entypo
            name="dots-three-vertical"
            size={27}
            color={Colors.GRAY_DARK}
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
    } else if (type === 'plus') {
        return plusIcon;
    } else if (type === 'cancel') {
        return cancelIcon;
    } else {
        return <View style={styles.icon}></View>;
    }
}

const styles = StyleSheet.create({
    icon: { flex: 1, textAlign: 'center' },
});

export default ToolBarButton;
