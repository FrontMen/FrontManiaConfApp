import {combineReducers} from 'redux';
import {reducer as talks} from './components/TalksList';
import {reducer as details} from './components/Details';
import {reducer as rooms} from './components/RoomsMenu';

export default combineReducers({
    details,
    talks,
    rooms,
});
