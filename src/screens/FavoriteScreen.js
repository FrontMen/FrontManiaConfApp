import React from 'react';
import {SafeAreaView} from 'react-native';
import FavoriteList from '../components/FavoriteList';
import {
    SPEAKER_DETAILS,
    TALK_DETAILS,
} from '../navigators/NavigationConsts';

export default class FavoriteScreen extends React.Component {
    static navigationOptions = {
        title: "Favorite",
    };

    navigateToTalkDetails = (id) => this.props.navigation.navigate(TALK_DETAILS, {id});
    navigateToSpeakerDetails = (id) => this.props.navigation.navigate(SPEAKER_DETAILS, {id});

    render () {
        return (
            <SafeAreaView>
                <FavoriteList
                    goToTalkDetails={this.navigateToTalkDetails}
                    goToSpeakerDetails={this.navigateToSpeakerDetails}
                />
            </SafeAreaView>
        );
    }
}