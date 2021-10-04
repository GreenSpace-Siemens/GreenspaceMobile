import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'native-base';
import { Colors } from '../../../styles/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// TODO: Need modify input for resizing when it gets full.

function MessageBar() {
    return (
        <View
            style={{
                flex: 1,
                padding: 6,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Colors.GRAY_LIGHT,
            }}>
            <Input
                placeholderTextColor={Colors.GRAY_DARK}
                style={{
                    flex: 8,
                    backgroundColor: Colors.WHITE,
                    fontSize: 14,
                    marginRight: 13,
                }}
            />
            <Button
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                }}>
                <MaterialCommunityIcons
                    name="send"
                    size={35}
                    color={Colors.GREEN}
                />
            </Button>
        </View>
    );
}

export default MessageBar;
