import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Input } from 'native-base';
import { Colors } from '../../../styles/index';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Header from '../header/Header';

import Context from '../../../modules/context/Context';

function Form({ type }) {
    const { closePanel } = React.useContext(Context);

    const AddSkill = () => {
        return (
            <>
                <View style={styles.header}>
                    <Header
                        title={type}
                        leftButton="cancel"
                        rightButton="check"
                        toggleModal={() => closePanel()}
                    />
                </View>
                <View style={styles.body}></View>
            </>
        );
    };

    const NewMessage = () => {
        return (
            <>
                <View style={styles.header}>
                    <Header
                        title={type}
                        rightButton="cancel"
                        toggleModal={() => closePanel()}
                    />
                </View>
                <View style={styles.body}>
                    <View style={styles.recipients}>
                        <Input
                            variant="underlined"
                            style={styles.input}
                            InputLeftElement={
                                <Text style={{ paddingLeft: 10, fontSize: 15 }}>
                                    To:
                                </Text>
                            }
                        />
                    </View>
                    <View style={styles.chat}></View>
                    <View style={styles.messageBar}>
                        <Input
                            variant="outline"
                            style={[styles.input]}
                            InputRightElement={
                                <Pressable
                                    onPress={() =>
                                        console.log('Sending Message!')
                                    }>
                                    <MaterialIcon
                                        name="send"
                                        size={30}
                                        color={Colors.GREEN}
                                    />
                                </Pressable>
                            }
                        />
                    </View>
                </View>
            </>
        );
    };

    const renderForm = () => {
        if (type === 'Add Skill') {
            return <AddSkill />;
        } else if (type === 'New Message');
        {
            return <NewMessage />;
        }
    };

    return <View style={styles.container}>{renderForm()}</View>;
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 5,
        width: '100%',
    },
    header: { flex: 1, width: '100%' },
    body: { flex: 8, width: '100%' },
    recipients: {
        flex: 1,
    },
    input: { fontSize: 15 },
    chat: { flex: 10 },
    messageBar: {
        flex: 1.2,
        paddingLeft: 7,
        paddingRight: 7,
    },
});

export default Form;
