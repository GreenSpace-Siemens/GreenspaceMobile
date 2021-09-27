import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/molecules/header/Header';

function Subscription({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Subscription"
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 250,
                        color: '#0FA97D',
                    }}>
                    Subscriptions coming soon!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#525B76',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        zIndex: -1,
    },
    icon: { marginLeft: 12 },
    body: {
        flex: 9,
        borderTopWidth: 0.5,
        borderTopColor: '#525B76',
    },
    link: {
        color: '#0FA97D',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        padding: 10,
        fontWeight: '500',
        fontSize: 18,
    },
    toggle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    switchLabel: { flex: 1, fontWeight: '500', fontSize: 18, color: '#0FA97D' },
    switch: { flex: 1 },
});

export default Subscription;
