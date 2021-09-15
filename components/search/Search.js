import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput />
            </View>
            <View style={styles.resultsContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', backgroundColor: '#ffffff' },
    searchBar: { flex: 1, borderBottomWidth: 0.2, borderColor: '#525B76' },
    resultsContainer: { flex: 8 },
});

export default Search;
