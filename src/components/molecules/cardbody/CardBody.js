import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import TextSection from '../../atoms/textsection/TextSection';
import ListSection from '../listsection/ListSection';

function CardBody() {
    return (
        <View style={styles.container}>
            <TextSection
                header="About"
                aboutValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <ListSection header="Skills" />
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

export default CardBody;
