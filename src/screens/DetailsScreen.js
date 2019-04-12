import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Details",
    };

    render () {
        const { navigation } = this.props;
        const id = navigation.getParam('id');

        return (
            <SafeAreaView>
                <Text>My details for {id}</Text>
            </SafeAreaView>
        )
    }
}
