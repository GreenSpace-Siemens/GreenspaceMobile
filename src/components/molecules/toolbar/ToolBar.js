import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import HeaderButton from '../../atoms/toolbarbutton/ToolBarButton';

function ToolBar({ navigation, title, leftButton, rightButton }) {
    return (
        <View style={styles.toolbar}>
            <HeaderButton navigation={navigation} type={leftButton} />
            <Text style={styles.title}>{title}</Text>
            <HeaderButton navigation={navigation} type={rightButton} />
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
