import {combineReducers} from 'redux';
import {reducer as dashboard} from './components/Dashboard';
import {reducer as talkDetails} from './components/TalkDetails';
import {reducer as rooms} from './components/RoomsMenu';
import {reducer as speakerDetails} from './components/SpeakerDetails';
import {reducer as talkOverlapModal} from './components/TalkOverlapsModal';

export default combineReducers({
    talkDetails,
    dashboard,
    rooms,
    speakerDetails,
    talkOverlapModal,
});
