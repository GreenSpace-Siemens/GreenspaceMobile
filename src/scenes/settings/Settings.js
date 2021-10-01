import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Settings"
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Account')}>
                    Account
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('NotificationSettings')}>
                    Notifications
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Subscription')}>
                    Subscription
                </Text>
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
    link: {
        color: Colors.GREEN,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
        padding: 10,
        fontWeight: '500',
        fontSize: 18,
    },
});

export default Settings;
