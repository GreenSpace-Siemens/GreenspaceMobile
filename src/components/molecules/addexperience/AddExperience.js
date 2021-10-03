import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, Input, TextArea } from 'native-base';
import { Colors } from '../../../styles/index';

function AddExperience() {
    const [current, setCurrent] = React.useState(false);

    const toggleCurrent = event => {
        setCurrent(event);
    };

    return (
        <View
            style={{
                maxHeight: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>
            <View style={{ marginBottom: 10 }}>
                <Input style={styles.input} />
                <Text style={styles.label}>Role</Text>
                <Input style={styles.input} />
                <Text style={styles.label}>Company</Text>
                <Input style={styles.input} />
                <Text style={styles.label}>Location</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <Input style={styles.input} />
                    <Text style={styles.label}>Start Month</Text>
                    <Input style={styles.input} />
                    <Text style={styles.label}>Start Year</Text>
                </View>
                {current ? null : (
                    <View
                        style={{
                            flex: 1.4,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                        <Input style={styles.input} />
                        <Text style={styles.label}>End Month</Text>
                        <Input style={styles.input} />
                        <Text style={styles.label}>End Year</Text>
                    </View>
                )}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: 5,
                }}>
                <Checkbox
                    accessibilityLabel="This checkbox checks if someone is currently working with the company."
                    colorScheme="green"
                    onChange={event => toggleCurrent(event)}
                    style={{
                        borderColor: Colors.GREEN,
                        marginRight: 5,
                    }}
                />
                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: '500',
                        color: Colors.GREEN,
                    }}>
                    I am currently working in this role.
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Description</Text>
                <TextArea
                    h={40}
                    textAlignVertical="top"
                    placeholder="Enter Coursework, activities, organizations, or awards..."
                    placeholderTextColor={Colors.GRAY_DARK}
                    style={{
                        borderWidth: 1.7,
                        borderColor: Colors.GRAY_DARK,
                        fontSize: 15,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE, padding: 20 },
    input: {
        backgroundColor: Colors.WHITE,
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_DARK,
        width: '88%',
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.GREEN,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
    },
    label: {
        color: Colors.GRAY_DARK,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,
    },
});

export default AddExperience;
