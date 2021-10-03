import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'native-base';
import { Colors } from '../../../styles/index';

function AddSkill() {
    return (
        <View>
            <Input
                placeholder="Enter Skill"
                style={{
                    backgroundColor: Colors.GRAY_LIGHT,
                    fontSize: 15,
                }}
            />
            <View></View>
        </View>
    );
}

export default AddSkill;
