import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

function Notifications({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Notifications"
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
    },
});

export default Notifications;
