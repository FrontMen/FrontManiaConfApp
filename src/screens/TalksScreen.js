import React from 'react';
import { SafeAreaView } from 'react-native';
import Dashboard from '../components/Dashboard';
import { DETAILS } from '../navigators/NavigationConsts';

export default class TalksScreen extends React.Component {
    static navigationOptions = {
        title: "Talks",
    };

    navigateToDetails = (id) => this.props.navigation.navigate(DETAILS, {id});

    render () {
        return (
            <SafeAreaView>
                <Dashboard goToDetails={this.navigateToDetails}/>
            </SafeAreaView>
        )
    }
}
