import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        height: '100%',
        backgroundColor: Colors.GREEN_LIGHT,
        padding: 20,
    },
});

export default CardBody;
