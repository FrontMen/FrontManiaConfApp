import React from 'react';

import { Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Hello",
    }
    render () {
        return <Text>Home screen</Text>
    }
}