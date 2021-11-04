import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Pressable } from 'native-base';
import { Colors } from '../../../styles/index';

function SwipeItem({
    jobRef,
    type,
    avatar,
    header,
    subheader,
    status,
    navigation,
}) {
    const goToPage = () => {
        navigation.navigate('Page', { jobRef: jobRef, type: type });
    };

    return (
        <Pressable onPress={() => goToPage()}>
            <View style={styles.container}>
                <Avatar source={{ uri: avatar }} />
                <View style={styles.text}>
                    <Text style={styles.header}>{header}</Text>
                    <Text style={styles.subheader}>{subheader}</Text>
                    {status !== undefined ? (
                        <Text style={styles.status}>{status}</Text>
                    ) : null}
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY_LIGHT,
        padding: 13,
    },
    text: { marginLeft: 13 },
    header: { fontSize: 17 },
    subheader: { fontSize: 17, color: Colors.GRAY_MEDIUM },
    status: { color: Colors.GREEN },
});

export default SwipeItem;
