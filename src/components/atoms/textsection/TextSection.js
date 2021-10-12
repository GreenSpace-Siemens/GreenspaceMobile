import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

// TODO: aboutValue is HTML. Need to convert to JSX for React Native. Tried WebView but had problems.

function TextSection({ header, aboutValue }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <Text style={{ fontSize: 18, color: Colors.GRAY_VERY_DARK }}>
                {aboutValue}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM },
    body: { backgroundColor: 'transparent' },
});

export default TextSection;
