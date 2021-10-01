import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles/index';
import Header from '../../components/organisms/header/Header';

function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title="Account"
                leftButton="back"
                rightButton={null}
            />
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
    container: { height: '100%', backgroundColor: Colors.WHITE },
    body: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: Colors.GRAY_DARK,
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
    buttonSubLabel: { color: Colors.GRAY_MEDIUM },
    buttonContainer: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
    },
    button: {
        backgroundColor: Colors.WHITE,
        paddingTop: 13,
        paddingBottom: 13,
    },
    signout: { fontSize: 18, fontWeight: 'bold', width: '100%' },
    signoutButton: { padding: 13, backgroundColor: Colors.GREEN_LIGHT },
});

export default Account;
