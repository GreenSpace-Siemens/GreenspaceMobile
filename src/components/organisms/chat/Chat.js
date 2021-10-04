import React from 'react';
import { View } from 'react-native';

import MessageBody from '../../molecules/messagebody/MessageBody';
import MessageBar from '../../atoms/messagebar/MessageBar';

function Chat() {
    return (
        <View
            style={{
                flex: 25,
                flexDirection: 'column',
            }}>
            <MessageBody />
            <MessageBar />
        </View>
    );
}

export default Chat;
