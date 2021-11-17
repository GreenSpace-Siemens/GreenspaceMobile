import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Colors } from '../../../styles/index';

function MenuCard({ navigation, header, value, jobs }) {
    const renderValue = () => {
        if (value > 999999) {
            return `${Math.floor(value / 1000000)}M`;
        } else if (value > 999) {
            return `${Math.floor(value / 1000)}k`;
        } else {
            return value;
        }
    };

    return (
        <Pressable
            style={styles.container}
            onPress={() =>
                navigation.navigate('Postings', {
                    header: header,
                    value: value,
                    jobs: jobs,
                })
            }>
            <Text style={[styles.text, { textAlign: 'right', fontSize: 46 }]}>
                {renderValue()}
            </Text>

            <Text style={[styles.text, { textAlign: 'center', fontSize: 20 }]}>
                {header}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 15,
        backgroundColor: Colors.BLUE_GREEN,
        paddingTop: 6,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        marginRight: 13,
        marginBottom: 17,
    },
    text: { color: Colors.WHITE, fontWeight: 'bold' },
});

export default MenuCard;
