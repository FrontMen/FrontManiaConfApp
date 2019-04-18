import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import LikedScreen from '../screens/LikedScreen';
import TalksScreen from '../screens/TalksScreen';
import DetailScreen from '../screens/DetailsScreen';
import { DETAILS, HOME, TALKS } from './NavigationConsts';

const stackNavigation = createStackNavigator({
    [TALKS]: TalksScreen,
    [DETAILS]: DetailScreen,
});

export default createBottomTabNavigator({
    [HOME]: LikedScreen,
    [TALKS]: stackNavigation,
}, {
    initialRouteName: TALKS,
});