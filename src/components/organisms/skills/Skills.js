import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import CustomModal from '../../molecules/custommodal/CustomModal';

function Skills({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.link}>Add New Skill</Text>
            <CustomModal navigation={navigation} />
        </View>
    );
}

export default Skills;

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    link: { color: Colors.GREEN, fontWeight: 'bold', fontSize: 18 },
});
