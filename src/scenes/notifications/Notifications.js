import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function Notifications({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Notifications</Text>
                <Entypo name="dots-three-vertical" size={27} color="#525B76" />
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
        borderBottomWidth: 0.5,
        borderBottomColor: '#525B76',
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
    body: {
        flex: 9,
    },
});

export default Notifications;
