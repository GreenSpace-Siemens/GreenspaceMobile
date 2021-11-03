import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import ListItem from '../../atoms/listitem/ListItem';

import { profile } from '../../../database/Database';

function Section({ type, header, body }) {
    const renderList = () => {
        return (
            <View style={styles.skills}>
                {Object.keys(body).map(key => {
                    return <ListItem key={key} skill={body[key]} />;
                })}
            </View>
        );
    };

    const renderText = () => {
        return (
            <View>
                <Text style={styles.text}>{body}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            {type == 'object' ? renderList() : renderText()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    header: { fontSize: 18, color: Colors.GRAY_MEDIUM, marginBottom: 7 },
    skills: { flexDirection: 'row', flexWrap: 'wrap' },
    text: { fontSize: 17, color: Colors.GRAY_VERY_DARK },
});

export default Section;
