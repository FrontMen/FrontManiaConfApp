import {combineReducers} from 'redux';
import {reducer as dashboard} from './components/Dashboard';
import {reducer as talkDetails} from './components/TalkDetails';
import {reducer as rooms} from './components/RoomsMenu';
import {reducer as speakerDetails} from './components/SpeakerDetails';

export default combineReducers({
    talkDetails,
    dashboard,
    rooms,
    speakerDetails
});
