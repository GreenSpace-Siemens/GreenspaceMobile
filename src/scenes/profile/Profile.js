import { tSTypeAliasDeclaration } from '@babel/types';
import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="edit"
                    size={30}
                    color="#525B76"
                    onPress={() => navigation.navigate('EditProfileNavigator')}
                />
                <Text style={styles.title}>Profile</Text>
                <Ionicons
                    name="settings-sharp"
                    size={30}
                    color="#525B76"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
    },
    body: { flex: 9 },
});

export default Profile;
