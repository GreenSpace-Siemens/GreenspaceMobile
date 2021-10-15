import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Box, ScrollView } from 'native-base';
import FrontCover from '../../atoms/frontcover/FrontCover';
import CardBody from '../../molecules/cardbody/CardBody';

function PageCard() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            onLayout={event => {
                console.log(event.nativeEvent.layout);
            }}>
            <FrontCover header="Software Engineer II" subheader="Twitter" />
            <CardBody />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        borderRadius: 20,
        flexDirection: 'column',
    },
});

export default PageCard;
