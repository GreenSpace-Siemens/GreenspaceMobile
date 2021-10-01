import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'native-base';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

function NotificationSettings({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Notifications"
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>Messages</Text>
                    <Switch
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        size="lg"
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>New Jobs</Text>
                    <Switch
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        size="lg"
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>Application Activity</Text>
                    <Switch
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        size="lg"
                    />
                </View>
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
    toggle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
    },
    switchLabel: {
        flex: 1,
        fontWeight: '500',
        fontSize: 18,
        color: Colors.GREEN,
    },
});

export default NotificationSettings;
