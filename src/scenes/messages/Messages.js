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

    const data = [
        {
            id: 1,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 2,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 3,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 4,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 5,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 6,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 7,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 8,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 9,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 10,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
    ];

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
                <SwipeList data={data} />
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
    },
});

export default Messages;
