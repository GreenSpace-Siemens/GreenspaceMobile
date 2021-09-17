import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Job title, Company, or Profile"
                    style={styles.input}
                    placeholderTextColor="#8D8D8D"
                />
            </View>
            <View style={styles.resultsContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    searchBar: {
        flex: 1,
        borderBottomWidth: 0.2,
        borderColor: '#525B76',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        backgroundColor: '#EFEFEF',
        borderRadius: 15,
        fontSize: 20,
        padding: 10,
    },
    resultsContainer: { flex: 8 },
});

export default Search;
