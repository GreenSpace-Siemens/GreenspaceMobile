import React from 'react';
import { Text } from 'react-native';
import { Colors } from '../../../styles/index';

function TopTabLabel({ focused, label }) {
    return (
        <Text
            style={{
                color: focused ? Colors.GREEN : Colors.GRAY_DARK,
                fontWeight: '500',
                width: 71,
                textAlign: 'center',
            }}>
            {label}
        </Text>
    );
}

export default TopTabLabel;
