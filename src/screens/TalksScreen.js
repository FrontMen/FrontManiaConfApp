import React from 'react';
import { SafeAreaView } from 'react-native';
import Dashboard from '../components/Dashboard';
import {
    SPEAKER_DETAILS,
    TALK_DETAILS,
} from '../navigators/NavigationConsts';
import TalkOverlapsModal from '../components/TalkOverlapsModal';

export default class TalksScreen extends React.Component {
    static navigationOptions = {
        title: "Talks",
    };

    navigateToTalkDetails = (id) => this.props.navigation.navigate(TALK_DETAILS, {id});
    navigateToSpeakerDetails = (id) => this.props.navigation.navigate(SPEAKER_DETAILS, {id});

    render () {
        return (
            <SafeAreaView>
                <Dashboard
                    goToTalkDetails={this.navigateToTalkDetails}
                    goToSpeakerDetails={this.navigateToSpeakerDetails}
                />
                <TalkOverlapsModal />
            </SafeAreaView>
        )
    }
}
