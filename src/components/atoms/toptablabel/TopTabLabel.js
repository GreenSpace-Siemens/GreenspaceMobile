import React from 'react';
import { Text } from 'react-native';

function TopTabLabel({ focused, label }) {
    return (
        <Text
            style={{
                color: focused ? '#0FA97D' : '#525B76',
                fontWeight: '500',
                width: 71,
                textAlign: 'center',
            }}>
            {label}
        </Text>
    );
}

export default TopTabLabel;
