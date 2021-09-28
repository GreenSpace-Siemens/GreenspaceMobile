import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';

function Skills({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('AddSkill')}>
                Add New Skill
            </Text>
        </View>
    );
}

export default Skills;

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    link: { color: Colors.GREEN, fontWeight: 'bold', fontSize: 18 },
});
