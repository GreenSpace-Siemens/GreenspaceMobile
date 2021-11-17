import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

function Postings({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Current Listings"
                leftButton="back"
                rightButton={null}
            />
            <View style={styles.body}>
                <Button>Create New</Button>
                <Text>Job Listings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexGrow: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Postings;
