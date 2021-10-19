import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import Section from '../section/Section';

function PageCardBody({ skills }) {
    return (
        <View style={styles.container}>
            <Section header="Skills" skills={skills} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GREEN_LIGHT,
        padding: 20,
    },
});

export default PageCardBody;
