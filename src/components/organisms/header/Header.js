import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { style } from 'styled-system';
import ToolBar from '../../molecules/toolbar/ToolBar';

function Header({ navigation, title, leftButton, rightButton }) {
    return (
        <View style={styles.header}>
            <ToolBar
                navigation={navigation}
                title={title}
                leftButton={leftButton}
                rightButton={rightButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Header;
