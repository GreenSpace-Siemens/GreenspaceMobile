import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Profile"
                leftButton="edit"
                rightButton="settings"
            />
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: { flex: 9 },
});

export default Profile;
