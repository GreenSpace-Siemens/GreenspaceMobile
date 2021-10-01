import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'native-base';
import { Colors } from '../../styles/index';

function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Input
                    placeholder="Job title, Company, or Profile"
                    placeholderTextColor={Colors.GRAY_MEDIUM}
                    style={styles.input}
                />
            </View>
            <View style={styles.resultsContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: Colors.WHITE },
    searchBar: {
        flex: 1,
        borderBottomWidth: 0.2,
        borderColor: Colors.GRAY_DARK,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        fontSize: 20,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 30,
    },
    resultsContainer: { flex: 9 },
});

export default Search;
