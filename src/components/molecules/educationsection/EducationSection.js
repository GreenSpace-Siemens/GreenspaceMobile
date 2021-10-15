import React from 'react';
import { StyleSheet } from 'react-native';
import Education from '../../atoms/education/Education';

function EducationSection({ education }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM },
    body: { backgroundColor: 'transparent' },
});

export default EducationSection;
