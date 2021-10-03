import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

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
                        color: Colors.GREEN,
                    }}>
                    Subscriptions coming soon!
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
});

export default Subscription;
