import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'native-base';
import { Colors } from '../../../styles/index';

function AddSkill({ addSkill, setSkill }) {
    return (
        <View>
            <Input
                placeholder="Enter Skill"
                style={{
                    backgroundColor: Colors.GRAY_LIGHT,
                    fontSize: 15,
                }}
                onChangeText={text => setSkill(text)}
            />
            <View></View>
        </View>
    );
}

export default AddSkill;
