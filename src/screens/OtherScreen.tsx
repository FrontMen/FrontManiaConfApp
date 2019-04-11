import React from 'react';

import { Text } from 'react-native';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Other",
    }
    render () {
        return <Text>Other screen</Text>
    }
}
