import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../components/organisms/header/Header';
import { Colors } from '../../styles/index';
import CustomModal from '../../components/molecules/custommodal/CustomModal';
import SwipeList from '../../components/molecules/swipelist/SwipeList';

function Messages({ navigation }) {
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Messages"
                leftButton={null}
                rightButton="compose"
                toggleModal={toggleModal}
            />
            <View style={styles.body}>
                <Text style={styles.text}>Messages Coming Soon!</Text>
            </View>
            <CustomModal
                open={open}
                toggleModal={toggleModal}
                navigation={navigation}
                title="New Message"
                leftButton={null}
                rightButton="cancel"
                padding={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexGrow: 9,
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
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
