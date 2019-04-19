import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import FavoriteScreen from '../screens/FavoriteScreen';
import TalksScreen from '../screens/TalksScreen';
import DetailScreen from '../screens/DetailsScreen';
import { DETAILS, FAVORITE, TALKS } from './NavigationConsts';

const stackNavigation = createStackNavigator({
    [TALKS]: TalksScreen,
    [DETAILS]: DetailScreen,
});

export default createBottomTabNavigator({
    [TALKS]: stackNavigation,
    [FAVORITE]: FavoriteScreen,
}, {
    initialRouteName: TALKS,
});