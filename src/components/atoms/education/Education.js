import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

function Education({ school, degreeType, major, gradDate, gpa }) {
    return (
        <View style={styles.container}>
            <View style={styles.degree}>
                <Text style={styles.degreeText}>
                    B.S. in Software Engineering
                </Text>
                <Text style={styles.degreeText}>2016</Text>
            </View>
            <View style={styles.school}>
                <Text style={styles.subText}>
                    Georgia Institute of Technology
                </Text>
                <Text style={styles.subText}>Atlanta, GA</Text>
            </View>
            <Text style={styles.subText}>GPA: 3.8</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'column' },
    degree: { flexDirection: 'row', justifyContent: 'space-between' },
    degreeText: { color: Colors.GRAY_VERY_DARK, fontSize: 18 },
    school: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subText: { color: Colors.GRAY_MEDIUM, fontSize: 14 },
});

export default Education;
