import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import ListItem from '../../atoms/listitem/ListItem';

import { profile } from '../../../database/Database';

function Section({ header }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.skills}>
                {profile.skills.map(skill => {
                    return <ListItem key={skill} skill={skill} />;
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM, marginBottom: 7 },
    skills: { flexDirection: 'row', flexWrap: 'wrap' },
});

export default Section;
