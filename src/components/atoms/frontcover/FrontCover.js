import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles/index';

// This is the background cover image for the swipable card
function FrontCover({ header, subheader, imgsrc, height, location, type }) {
    return (
        <View style={[styles.container, { height: height }]}>
            <ImageBackground
                source={imgsrc}
                alt="Twitter"
                style={[
                    styles.image,
                    {
                        justifyContent:
                            type === 'job' ? 'space-between' : 'flex-end',
                    },
                ]}
                resizeMode="cover">
                {type === 'job' ? (
                    <View style={styles.score}>
                        <Text style={styles.scoreText}>0%</Text>
                    </View>
                ) : null}
                <View style={styles.imageContent}>
                    <Text style={styles.header}>{header}</Text>
                    <Text style={styles.subheader}>{subheader}</Text>
                    {location !== undefined ? (
                        <Text style={styles.subheader}>{location}</Text>
                    ) : null}
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        flex: 1,
        flexDirection: 'column',
    },
    score: {
        backgroundColor: Colors.WHITE,
        opacity: 0.7,
        width: 60,
        height: 60,
        borderBottomLeftRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    scoreText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.GRAY_VERY_DARK,
    },
    imageContent: { padding: 20 },
    header: { color: Colors.WHITE, fontSize: 24, fontWeight: 'bold' },
    subheader: { color: Colors.WHITE, fontSize: 20 },
});

export default FrontCover;
