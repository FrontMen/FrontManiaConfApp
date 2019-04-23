import React from 'react';
import {SafeAreaView} from 'react-native';
import SpeakerDetails from '../components/SpeakerDetails';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Speaker",
    };

    render () {
        const {navigation} = this.props;
        const id = navigation.getParam('id');

        return (
            <SafeAreaView>
                <SpeakerDetails id={id}/>
            </SafeAreaView>
        )
    }
}
