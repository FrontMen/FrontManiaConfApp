import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import DetailScreen from '../screens/DetailsScreen';
import { DETAILS, HOME, OTHER } from './NavigationConsts';

const stackNavigation = createStackNavigator({
    [OTHER]: OtherScreen,
    [DETAILS]: DetailScreen,
});

export default createBottomTabNavigator({
    [HOME]: HomeScreen,
    [OTHER]: stackNavigation,
}, {
    initialRouteName: OTHER,
});