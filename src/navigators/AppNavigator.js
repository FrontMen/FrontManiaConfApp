import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import FavoriteScreen from '../screens/FavoriteScreen';
import TalksScreen from '../screens/TalksScreen';
import DetailScreen from '../screens/TalkDetailsScreen';
import SpeakerDetails from '../screens/SpeakerDetailsScreen';
import { TALK_DETAILS, FAVORITE, TALKS, SPEAKER_DETAILS } from './NavigationConsts';

const talksStack = createStackNavigator({
    [TALKS]: TalksScreen,
    [TALK_DETAILS]: DetailScreen,
    [SPEAKER_DETAILS]: SpeakerDetails,
});

const favoriteStack = createStackNavigator({
    [FAVORITE]: FavoriteScreen,
    [TALK_DETAILS]: DetailScreen,
    [SPEAKER_DETAILS]: SpeakerDetails,
});

export default createBottomTabNavigator({
    [TALKS]: talksStack,
    [FAVORITE]: favoriteStack,
}, {
    initialRouteName: TALKS,
});