import React from 'react';
import { SafeAreaView } from 'react-native';
import Details from '../components/Details';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Details",
    };

    render () {
        const { navigation } = this.props;
        const id = navigation.getParam('id');

        return (
            <SafeAreaView>
                <Details id={id}/>
            </SafeAreaView>
        )
    }
}
