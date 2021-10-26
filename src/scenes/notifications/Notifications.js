import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'native-base';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

import SwipeList from '../../components/molecules/swipelist/SwipeList';

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
                <Text style={styles.text}>Notifications Coming Soon</Text>
            </View>
        </View>
    );
}
View;

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexGrow: 9,
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.GREEN,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Notifications;
