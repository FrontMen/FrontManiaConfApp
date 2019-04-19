import React from 'react';
import {SafeAreaView} from 'react-native';
import FavoriteList from '../components/FavoriteList';
import {DETAILS} from '../navigators/NavigationConsts';

export default class FavoriteScreen extends React.Component {
    static navigationOptions = {
        title: "Favorite",
    };

    navigateToDetails = (id) => this.props.navigation.navigate(DETAILS, {id});

    render () {
        return (
            <SafeAreaView>
                <FavoriteList goToDetails={this.navigateToDetails}/>
            </SafeAreaView>
        );
    }
}