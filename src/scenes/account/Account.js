import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TextInput, Switch, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="chevron-left"
                    size={45}
                    color="#525B76"
                    style={styles.icon}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Account</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.accountInformation}>
                    <Text style={styles.subtitle}>Login Information</Text>
                    <Button
                        title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.buttonLabel}>Email</Text>
                                <Text style={styles.buttonSubLabel}>
                                    johndoe@siemens.com {'>'}
                                </Text>
                            </View>
                        }
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate('Email')}
                    />
                    <Button
                        title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.buttonLabel}>Phone</Text>
                                <Text style={styles.buttonSubLabel}>
                                    +1 (123) 456 - 7890 {'>'}
                                </Text>
                            </View>
                        }
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate('Phone')}
                    />
                    <Button
                        title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.buttonLabel}>Password</Text>
                                <Text style={styles.buttonSubLabel}>{'>'}</Text>
                            </View>
                        }
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate('Password')}
                    />
                </View>
                <View>
                    <Button
                        title={<Text style={styles.signout}>Sign Out</Text>}
                        buttonStyle={styles.signoutButton}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    header: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#525B76',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#525B76',
        marginLeft: 84,
    },
    icon: { marginLeft: 12 },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    accountInformation: { padding: 8 },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
    },
    buttonTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonLabel: { fontSize: 18 },
    buttonSubLabel: { color: '#8D8D8D' },
    buttonContainer: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingTop: 13,
        paddingBottom: 13,
    },
    signout: { fontSize: 18, fontWeight: 'bold', width: '100%' },
    signoutButton: { padding: 13, backgroundColor: '#B4E4D6' },
});

export default Account;
