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
                aboutValue="asdasdasdfasdfasgasgesdsdsdssdsdsdsdsdsdsdsdsdsdssdsdssdsdssdsdrsdgwergasdasdasdasd"
            />
            <ListSection header="Skills" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 100,
        backgroundColor: Colors.GREEN_LIGHT,
        padding: 20,
    },
});

export default CardBody;
