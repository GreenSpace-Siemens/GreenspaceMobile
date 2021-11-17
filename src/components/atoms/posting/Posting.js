import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../styles/index';

import CalcTime from '../../../modules/calctime/CalcTime';

function Posting({ navigation, posting }) {
    const { title, company, location, date, applicants } = posting;

    return (
        <Pressable
            style={styles.container}
            onPress={() => console.log(`Navigate to job: ${title}.`)}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sub}>{company}</Text>
                <Text style={styles.sub}>{location}</Text>
            </View>
            <View style={styles.right}>
                <View style={[styles.item, { width: 110, marginBottom: 7 }]}>
                    <MaterialIcons
                        name="date-range"
                        size={22}
                        color={Colors.WHITE}
                    />
                    <Text style={styles.text}>{CalcTime(date, false)}</Text>
                </View>
                <View style={[styles.item, { width: 70 }]}>
                    <MaterialIcons
                        name="person"
                        size={22}
                        color={Colors.WHITE}
                    />
                    <Text style={styles.text}>{applicants}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.GRAY_LIGHT,
        marginBottom: 10,
        borderRadius: 15,
        padding: 13,
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    right: {
        alignItems: 'flex-end',
    },
    title: {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: '500',
        width: 200,
        color: Colors.GRAY_VERY_DARK,
    },
    sub: { fontSize: 17, color: Colors.GRAY_MEDIUM },
    item: {
        backgroundColor: Colors.GREEN,
        borderRadius: 18,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: { color: Colors.WHITE, fontSize: 17, fontWeight: '500' },
});

export default Posting;
