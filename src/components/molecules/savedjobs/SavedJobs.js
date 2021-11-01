import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScrollView, View } from 'native-base';
import SwipeItem from '../../atoms/swipeitem/SwipeItem';
import { Colors } from '../../../styles/index';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function SavedJobs() {
    const [saved, setSaved] = React.useState(null);

    const fetchSavedJobs = async () => {
        const userID = auth().currentUser.uid;
        const user = await firestore().collection('Users').doc(userID).get();
        const userData = user.data();

        const initJobs = [];
        for (let i = 0; i < userData.favorites.saved.length; i++) {
            let ref = userData.favorites.saved[i].job.slice(5);
            const job = await firestore().collection('Jobs').doc(ref).get();
            const jobData = job.data();

            const nextJob = {
                id: i,
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                header: `${jobData.title}`,
                subheader: `${jobData.company}\n${jobData.location}`,
            };

            initJobs.push(nextJob);
        }

        setSaved(initJobs);
    };

    React.useEffect(() => {
        fetchSavedJobs();
    }, []);

    return (
        <ScrollView
            style={{
                height: '100%',
                backgroundColor: '#ffffff',
            }}>
            {saved === null ? (
                <ActivityIndicator
                    size={60}
                    color={Colors.GREEN}
                    style={{ marginTop: 240 }}
                />
            ) : (
                saved.map(({ id, avatar, header, subheader }) => {
                    return (
                        <SwipeItem
                            key={id}
                            avatar={avatar}
                            header={header}
                            subheader={subheader}
                        />
                    );
                })
            )}
        </ScrollView>
    );
}

export default SavedJobs;
