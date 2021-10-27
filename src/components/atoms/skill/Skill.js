import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Skill({ islast, skill, deleteSkill }) {
    return (
        <View
            style={[styles.container, { borderBottomWidth: !islast ? 1 : 0 }]}>
            <Text style={styles.text}>{skill}</Text>
            <MaterialIcons
                size={25}
                name="delete"
                color={Colors.RED}
                style={styles.icon}
                onPress={() => deleteSkill(skill)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.GRAY_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        flex: 0,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        padding: 4,
    },
});

export default Skill;
