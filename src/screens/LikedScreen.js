import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class LikedScreen extends React.Component {
    static navigationOptions = {
        title: "Liked",
    };

    render () {
        return (
            <SafeAreaView>
                <Text>Home screen</Text>
            </SafeAreaView>
        );
    }
}