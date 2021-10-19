import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import ListItem from '../../atoms/listitem/ListItem';

function Section({ header, skills }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <Text>{skills}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM, marginBottom: 7 },
});

export default Section;
