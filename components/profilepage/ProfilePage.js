import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

function ProfilePage({ navigation }) {
    return (
        <View>
            <Text>Profile</Text>
            <Button
                title="Edit"
                onPress={() => navigation.navigate('EditProfile')}
            />
            <Button
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

export default ProfilePage;
