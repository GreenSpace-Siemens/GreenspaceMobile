import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button, Image } from 'native-base';
import { Colors } from '../../../styles/index';

import img from './profile-pic.jpg';

import { launchImageLibrary } from 'react-native-image-picker';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Context from '../../../modules/context/Context';

function Cover({ navigation }) {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        occupation,
        setOccupation,
        company,
        setCompany,
        location,
        setLocation,
        setChanges,
    } = React.useContext(Context);

    const [photo, setPhoto] = React.useState(img);

    const onResult = QuerySnapshot => {
        const userData = QuerySnapshot.data();

        setFirstName(userData.name.firstName);
        setLastName(userData.name.lastName);
        setOccupation(userData.occupation.title);
        setCompany(userData.occupation.company);
        setLocation(userData.occupation.location);
    };

    const onError = error => {
        console.error(error);
    };

    React.useEffect(() => {
        const fetchCoverData = async () => {
            const userID = auth().currentUser.uid;
            await firestore()
                .collection('Users')
                .doc(userID)
                .onSnapshot(onResult, onError);
        };

        fetchCoverData();

        return () => {
            setFirstName(null);
            setLastName(null);
            setOccupation(null);
            setCompany(null);
            setLocation(null);
            setChanges(false);
        };
    }, []);

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

            <TextInput
                style={styles.input}
                value={firstName !== null ? firstName : null}
                placeholderTextColor={Colors.GREEN}
                onChangeText={text => {
                    setFirstName(text);
                    setChanges(true);
                }}
            />
            <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                value={lastName !== null ? lastName : null}
                placeholderTextColor={Colors.GREEN}
                onChangeText={text => {
                    setLastName(text);
                    setChanges(true);
                }}
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                value={occupation !== null ? occupation : null}
                placeholderTextColor={Colors.GREEN}
                onChangeText={text => {
                    setOccupation(text);
                    setChanges(true);
                }}
            />
            <Text style={styles.label}>Occupation</Text>
            <TextInput
                style={styles.input}
                value={company !== null ? company : null}
                placeholderTextColor={Colors.GREEN}
                onChangeText={text => {
                    setCompany(text);
                    setChanges(true);
                }}
            />
            <Text style={styles.label}>Company</Text>
            <TextInput
                style={styles.input}
                value={location !== null ? location : null}
                placeholderTextColor={Colors.GREEN}
                onChangeText={text => {
                    setLocation(text);
                    setChanges(true);
                }}
            />
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
