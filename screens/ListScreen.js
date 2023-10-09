import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class ListScreen extends React.Component {
    render() {
        const dataList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

        return (
            <View style={styles.container}>
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
