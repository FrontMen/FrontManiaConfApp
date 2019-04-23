import React from 'react';
import { SafeAreaView } from 'react-native';
import TalkDetails from '../components/TalkDetails';

export default class TalkDetailsScreen extends React.Component {
    static navigationOptions = {
        title: "TalkDetails",
    };

    render () {
        const {navigation} = this.props;
        const id = navigation.getParam('id');

        return (
            <SafeAreaView>
                <TalkDetails id={id}/>
            </SafeAreaView>
        )
    }
}
