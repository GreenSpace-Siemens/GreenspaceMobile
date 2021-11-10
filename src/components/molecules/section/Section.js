import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';
import RenderHtml from 'react-native-render-html';

import ListItem from '../../atoms/listitem/ListItem';

function Section({ type, header, body }) {
    const renderList = () => {
        return (
            <View style={styles.skills}>
                {body !== null
                    ? Object.keys(body).map(key => {
                          return <ListItem key={key} skill={body[key]} />;
                      })
                    : null}
            </View>
        );
    };

    const renderText = () => {
        return (
            <View>
                <RenderHtml
                    contentWidth={312}
                    source={{
                        html: `<div style="margin: 0px; font-size: 17px; color: ${Colors.GRAY_VERY_DARK};">${body}</div>`,
                    }}
                />
            </View>
            // <Text style={styles.text}>{body}</Text>
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
