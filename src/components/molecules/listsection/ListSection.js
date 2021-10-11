import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import ListItem from '../../atoms/listitem/ListItem';

function ListSection({ header }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.body}>
                <ListItem skill="Java" />
                <ListItem skill="C" />
                <ListItem skill="Python" />
                <ListItem skill="AWS" />
                <ListItem skill="Machine Learning" />
                <ListItem skill="OO A/D" />
                <ListItem skill="SCRUM" />
                <ListItem skill="Databases" />
                <ListItem skill="JavaScript" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { maxHeight: '100%', width: '100%', marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM, marginBottom: 7 },
    body: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default ListSection;
