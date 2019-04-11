import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';


export default createBottomTabNavigator({
    Home: HomeScreen,
    Other: OtherScreen,
});