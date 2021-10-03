import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../../styles/index';

function SwipeLine() {
    return <View style={styles.line} />;
}
const styles = StyleSheet.create({
    line: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.GRAY_DARK,
        marginBottom: 5,
        width: 30,
    },
});

export default SwipeLine;
