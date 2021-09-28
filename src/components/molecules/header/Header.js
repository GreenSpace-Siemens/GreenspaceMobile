import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../../styles/index';
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
    header: {
        flex: 1,
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

export default Header;
