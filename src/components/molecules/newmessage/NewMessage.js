import React from 'react';
import { View } from 'react-native';
import { Input } from 'native-base';
import { Colors } from '../../../styles/index';
import Chat from '../../organisms/chat/Chat';

function NewMessage() {
    return (
        <View
            style={{
                height: 650,
                width: '100%',
                flexDirection: 'column',
            }}>
            <Input
                placeholder="To:"
                style={{
                    flex: 1,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    width: '100%',
                    fontSize: 14,
                    color: Colors.GREEN,
                }}
            />
            <Chat />
        </View>
    );
}

export default NewMessage;
