import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Colors } from '../../../styles/index';
import SwipeItem from '../../atoms/swipeitem/SwipeItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SwipeList({ data }) {
    const [listData, setListData] = React.useState(data);

    const deleteRow = index => {
        const newData = [...listData];
        newData.splice(index, 1);
        setListData(newData);
    };

    const renderItem = ({ item }) => (
        <SwipeItem
            avatar={item.avatar}
            header={item.header}
            subheader={item.subheader}
        />
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.hiddenItems}>
            <Pressable onPress={() => deleteRow(data.index)}>
                <View style={styles.delete}>
                    <MaterialIcons
                        size={25}
                        name="delete"
                        color={Colors.WHITE}
                    />
                    <Text style={styles.text}>Delete</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
        <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-85}
        />
    );
}

const styles = StyleSheet.create({
    hiddenItems: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    delete: {
        width: 85,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RED,
    },
    text: { color: Colors.WHITE, fontWeight: '500' },
});

export default SwipeList;
