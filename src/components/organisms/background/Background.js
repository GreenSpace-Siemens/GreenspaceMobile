import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import CustomModal from '../../molecules/custommodal/CustomModal';

import Skill from '../../atoms/skill/Skill';

import { profile } from '../../../database/Database';

function Background({ navigation, route }) {
    const { link } = route.params;

    const [skills, setSkills] = React.useState(profile.skills);
    const deleteSkill = skill => {
        const id = skills.indexOf(skill);
        const modSkills = [...skills];
        modSkills.splice(id, 1);
        setSkills(modSkills);
    };

    const addSkill = skill => {
        const modSkills = [...skills];
        modSkills.push(skill);
        setSkills(modSkills);
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
                {skills.map((skill, i) => {
                    return (
                        <Skill
                            key={i}
                            id={i}
                            islast={
                                i + 1 >= profile.skills.length ? true : false
                            }
                            skill={skill}
                            deleteSkill={deleteSkill}
                        />
                    );
                })}
                <Text style={styles.link} onPress={() => toggleModal()}>
                    {link}
                </Text>
            </ScrollView>
            <CustomModal
                open={open}
                toggleModal={toggleModal}
                navigation={navigation}
                title={link}
                leftButton="cancel"
                rightButton="plus"
                padding={true}
                addSkill={addSkill}
            />
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
