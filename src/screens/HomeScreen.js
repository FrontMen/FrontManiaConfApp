import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Hello",
    };

    render () {
        return (
            <SafeAreaView>
                <Text>Home screen</Text>
            </SafeAreaView>
        );
    }
}