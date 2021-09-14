import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function Dashboard({ navigation, route }) {
    const { username, password } = route.params;

    return (
        <View>
            <Text>Dashboard</Text>
            <Text>{`Username: ${username}`}</Text>
            <Text>{`Password: ${password}`}</Text>
            <Button
                title="Log Out"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default Dashboard;
