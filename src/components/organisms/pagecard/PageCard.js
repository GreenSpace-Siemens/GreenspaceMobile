import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, ScrollView } from 'native-base';
import FrontCover from '../../atoms/frontcover/FrontCover';
import CardBody from '../../molecules/cardbody/CardBody';

function PageCard() {
    return (
        <ScrollView
            style={{ flex: 1 }}
            _contentContainerStyle={{ flexGrow: 1 }}>
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
