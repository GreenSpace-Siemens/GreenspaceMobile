import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button, Image } from 'native-base';
import { Colors } from '../../../styles/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import img from './profile-pic.jpg';

import { launchImageLibrary } from 'react-native-image-picker';

function Cover({ navigation }) {
    const [photo, setPhoto] = React.useState(img);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Cover Photo</Text>
            <View style={styles.coverImageContainer}>
                <View style={styles.imageInput}>
                    <Button
                        style={styles.launcher}
                        onPress={() =>
                            launchImageLibrary('photo', () => {
                                console.log('I uploaded a new image!');
                            })
                        }>
                        Change Picture
                    </Button>
                </View>
                <Image
                    source={photo}
                    style={styles.image}
                    alt="Profile Picture"
                    size={190}
                />
            </View>
            <TextInput style={styles.input} />
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Occupation</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Company</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Location</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    coverImageContainer: {
        marginTop: 5,
        marginBottom: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imageInput: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 60,
    },
    image: {
        resizeMode: 'contain',
        width: 136,
        borderRadius: 45,
    },
    launcher: {
        color: Colors.GREEN,
        marginBottom: 15,
        backgroundColor: Colors.GREEN,
    },
    input: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_DARK,
        width: '88%',
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.GREEN,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    label: { color: Colors.GRAY_DARK, fontWeight: 'bold', fontSize: 16 },
});

export default Cover;
