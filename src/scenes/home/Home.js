import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/index';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GREENSPACE</Text>
                <Button
                    title={
                        <Ionicons
                            name="notifications"
                            size={25}
                            color={Colors.GREEN}
                        />
                    }
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Notifications')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.WHITE,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: 17,
    },
    title: {
        flex: 1,
        textAlign: 'right',
        fontSize: 30,
        fontWeight: '800',
        color: Colors.GREEN,
        marginRight: '16%',
    },
    button: { backgroundColor: 'transparent' },
});

export default Home;
