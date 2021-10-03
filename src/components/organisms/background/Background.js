import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import CustomModal from '../../molecules/custommodal/CustomModal';

function Background({ navigation, route }) {
    const { link } = route.params;

    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.link} onPress={() => toggleModal()}>
                {link}
            </Text>
            <CustomModal
                open={open}
                toggleModal={toggleModal}
                navigation={navigation}
                title={link}
                leftButton="cancel"
                rightButton="plus"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    link: { color: Colors.GREEN, fontWeight: 'bold', fontSize: 18 },
});

export default Background;
