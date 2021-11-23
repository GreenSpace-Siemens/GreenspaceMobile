import React from 'react';
import {
    ActivityIndicator,
    View,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { Colors } from '../../../styles/index';

import Skill from '../../atoms/skill/Skill';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Context from '../../../modules/context/Context';

function Background({ navigation, route }) {
    const { link } = route.params;
    const userID = auth().currentUser.uid;
    const { openPanel } = React.useContext(Context);

    const [skills, setSkills] = React.useState(null);

    const onResult = QuerySnapshot => {
        const userData = QuerySnapshot.data();

        const initSkills = userData.description.Skills;
        setSkills(initSkills);
    };

    const onError = error => {
        console.error(error);
    };

    React.useEffect(() => {
        const fetchSkills = async () => {
            await firestore()
                .collection('Users')
                .doc(userID)
                .onSnapshot(onResult, onError);
        };

        fetchSkills();

        // return () => {
        //     setSkills(null);
        // };
    }, []);

    const deleteSkill = async skill => {
        const id = skills.indexOf(skill);
        const modSkills = [...skills];
        modSkills.splice(id, 1);
        console.log(modSkills);

        await firestore().collection('Users').doc(userID).update({
            'description.Skills': modSkills,
        });
    };

    const addSkill = async skill => {
        const modSkills = [...skills];
        modSkills.push(skill);

        await firestore().collection('Users').doc(userID).update({
            'description.Skills': modSkills,
        });
    };

    const [open, setOpen] = React.useState(false);
    const toggleModal = input => {
        if (input !== null && input !== undefined) {
            addSkill(input);
        }

        setOpen(!open);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {skills === null ? (
                    <ActivityIndicator size={60} color={Colors.GREEN} />
                ) : (
                    skills.map((skill, i) => {
                        return (
                            <Skill
                                key={i}
                                skill={skill}
                                deleteSkill={deleteSkill}
                            />
                        );
                    })
                )}

                <Text
                    style={styles.link}
                    onPress={() => openPanel('Add Skill')}>
                    {link}
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    scrollContainer: { paddingLeft: 20, paddingRight: 20 },
    link: {
        color: Colors.GREEN,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
});

export default Background;
