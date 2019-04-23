import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import FavoriteScreen from '../screens/FavoriteScreen';
import TalksScreen from '../screens/TalksScreen';
import DetailScreen from '../screens/DetailsScreen';
import { DETAILS, FAVORITE, TALKS } from './NavigationConsts';

const talksStack = createStackNavigator({
    [TALKS]: TalksScreen,
    [DETAILS]: DetailScreen,
});

const favoriteStack = createStackNavigator({
    [FAVORITE]: FavoriteScreen,
    [DETAILS]: DetailScreen,
});

export default createBottomTabNavigator({
    [TALKS]: talksStack,
    [FAVORITE]: favoriteStack,
}, {
    initialRouteName: TALKS,
});