import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'native-base';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

import { profile } from '../../database/Database';
import PageCard from '../../components/organisms/pagecard/PageCard';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Profile({ navigation }) {
    const { picture } = profile;

    const [user, setUser] = React.useState(null);
    const onResult = QuerySnapshot => {
        const userData = QuerySnapshot.data();
        setUser(userData);
    };

    const onError = error => {
        console.error(error);
    };

    React.useEffect(() => {
        const fetchUserData = async () => {
            const userID = auth().currentUser.uid;
            await firestore()
                .collection('Users')
                .doc(userID)
                .onSnapshot(onResult, onError);
        };
        fetchUserData();
    }, []);

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Profile"
                leftButton="edit"
                rightButton="settings"
            />
            <View style={styles.body}>
                {user === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : (
                    <PageCard
                        header={`${user.name.firstName} ${user.name.lastName}`}
                        subheader={
                            user.occupation.title !== null &&
                            user.occupation.company !== null
                                ? `${user.occupation.title} at ${user.occupation.company}`
                                : null
                        }
                        imgsrc={picture}
                        location={user.occupation.location}
                        description={user.description}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        padding: 15,
        justifyContent: 'center',
    },
});

export default Profile;
