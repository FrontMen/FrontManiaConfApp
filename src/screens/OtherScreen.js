import React from 'react';
import { SafeAreaView } from 'react-native';
import TalksList from '../components/TalksList';
import { DETAILS } from '../navigators/NavigationConsts';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Other",
    };

    navigateToDetails = (id) => this.props.navigation.navigate(DETAILS, {id});

    render () {
        return (
            <SafeAreaView>
                <TalksList goToDetails={this.navigateToDetails}/>
            </SafeAreaView>
        )
    }
}
