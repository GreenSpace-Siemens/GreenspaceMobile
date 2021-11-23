import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';
import SlidingUpPanel from 'rn-sliding-up-panel';

import SwipeLine from '../../atoms/swipeline/SwipeLine';

function Panel({ setPanel, form }) {
    return (
        <SlidingUpPanel ref={c => setPanel(c)}>
            <View style={styles.container}>
                <SwipeLine />
                <View style={styles.header}>
                    <Text>{form}</Text>
                </View>
                <View style={styles.body}></View>
            </View>
        </SlidingUpPanel>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        paddingTop: 5,
    },
    header: { flex: 1, width: '100%' },
    body: { flex: 8, width: '100%' },
});

export default Panel;
