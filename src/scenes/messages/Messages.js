import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';

import Context from '../../modules/context/Context';

function Messages({ navigation }) {
    const { openPanel } = React.useContext(Context);

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Messages"
                leftButton={null}
                rightButton="compose"
                toggleModal={() => openPanel('New Message')}
            />
            <View style={styles.body}>
                <Text style={styles.text}>Messages Coming Soon!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexGrow: 9,
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.GREEN,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Messages;
