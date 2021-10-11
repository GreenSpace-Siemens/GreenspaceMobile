import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from '../../../styles/index';

function ListItem({ skill }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{skill}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.GREEN,
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 11,
        paddingLeft: 11,
        borderRadius: 18,
        marginRight: 8,
        marginBottom: 8,
    },
    text: { color: Colors.WHITE, fontSize: 17 },
});

export default ListItem;
