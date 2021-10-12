import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

import img from './twitter.jpeg';

function FrontCover({ header, subheader }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={img}
                alt="Twitter"
                style={styles.image}
                resizeMode="cover">
                <View style={styles.imageContent}>
                    <Text style={styles.header}>{header}</Text>
                    <Text style={styles.subheader}>{subheader}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, minHeight: 566 },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    imageContent: { padding: 20 },
    header: { color: Colors.WHITE, fontSize: 24, fontWeight: 'bold' },
    subheader: { color: Colors.WHITE, fontSize: 20 },
});

export default FrontCover;
