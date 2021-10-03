import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

function Messages({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Messages"
                leftButton={null}
                rightButton="compose"
            />
            <View style={styles.body}>
                <Text>Recipents</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: { flex: 9, borderTopWidth: 0.5, borderTopColor: Colors.GRAY_DARK },
});

export default Messages;
