import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import ToolBarButton from '../../atoms/toolbarbutton/ToolBarButton';

function ToolBar({ navigation, title, leftButton, rightButton, toggleModal }) {
    return (
        <View style={styles.toolbar}>
            <ToolBarButton
                navigation={navigation}
                type={leftButton}
                toggleModal={toggleModal}
            />
            <Text style={styles.title}>{title}</Text>
            <ToolBarButton
                navigation={navigation}
                type={rightButton}
                toggleModal={toggleModal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    title: {
        flex: 5,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.GRAY_DARK,
    },
});

export default ToolBar;
