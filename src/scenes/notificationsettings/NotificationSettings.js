import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'native-base';
import { Colors } from '../../styles/index';
import Header from '../../components/molecules/header/Header';

function NotificationSettings({ navigation }) {
    const [enabled, setEnabled] = React.useState([false, false, false]);

    // Sets switches on and off
    const toggleSwitch = id => {
        let newEnabled = [...enabled];
        newEnabled[id] = !newEnabled[id];
        setEnabled(newEnabled);
    };

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
                        // style={styles.switch}
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        // thumbColor={Colors.WHITE}
                        // onValueChange={() => toggleSwitch(0)}
                        // value={enabled[0]}
                        size="lg"
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>New Jobs</Text>
                    <Switch
                        // style={styles.switch}
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        // thumbColor={Colors.WHITE}
                        // onValueChange={() => toggleSwitch(1)}
                        // value={enabled[1]}
                        size="lg"
                    />
                </View>
                <View style={styles.toggle}>
                    <Text style={styles.switchLabel}>Application Activity</Text>
                    <Switch
                        // style={styles.switch}
                        trackColor={{
                            false: Colors.GRAY_MEDIUM,
                            true: Colors.GREEN_LIGHT,
                        }}
                        onThumbColor={Colors.GREEN}
                        // thumbColor={Colors.WHITE}
                        // onValueChange={() => toggleSwitch(2)}
                        // value={enabled[2]}
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
    switch: { flex: 1 },
});

export default NotificationSettings;
