import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';
import SlidingUpPanel from 'rn-sliding-up-panel';

import SwipeLine from '../../atoms/swipeline/SwipeLine';
import Form from '../../organisms/form/Form';

function Panel({ setPanel, form }) {
    return (
        <SlidingUpPanel ref={c => setPanel(c)}>
            <View style={styles.container}>
                <SwipeLine />
                <Form type={form} />
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
        paddingTop: 5,
        alignItems: 'center',
    },
});

export default Panel;
