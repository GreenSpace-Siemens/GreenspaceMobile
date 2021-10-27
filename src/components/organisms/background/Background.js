import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import CustomModal from '../../molecules/custommodal/CustomModal';

import Skill from '../../atoms/skill/Skill';

import { profile } from '../../../database/Database';

function Background({ navigation, route }) {
    const { link } = route.params;

    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {profile.skills.map((skill, i) => {
                    return (
                        <Skill
                            key={i}
                            islast={
                                i + 1 >= profile.skills.length ? true : false
                            }
                            skill={skill}
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
