import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to the Home Page!</Text>
                <Button title="Go to List" onPress={() => this.props.navigation.navigate('List')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
