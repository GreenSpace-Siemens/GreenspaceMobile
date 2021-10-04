import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToolBar from '../../molecules/toolbar/ToolBar';

function Header({ navigation, title, leftButton, rightButton, toggleModal }) {
    return (
        <View style={styles.header}>
            <ToolBar
                navigation={navigation}
                title={title}
                leftButton={leftButton}
                rightButton={rightButton}
                toggleModal={toggleModal}
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
