import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

function Email({ navigation, route }) {
    const [email, setEmail] = React.useState(route.params.email);
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Email"
                leftButton="back"
                rightButton="check"
            />
            <View style={styles.body}>
                <TextInput
                    placeholder="Update email"
                    style={styles.input}
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_LIGHT,
    },
    input: {
        backgroundColor: Colors.WHITE,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
        fontSize: 15,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
    },
});

export default Email;
