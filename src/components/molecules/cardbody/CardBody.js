import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

function CardBody() {
    return (
        <View style={styles.container}>
            <Text>Card body</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.GREEN_LIGHT },
});

export default CardBody;
