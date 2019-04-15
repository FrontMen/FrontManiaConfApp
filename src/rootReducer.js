import {combineReducers} from 'redux';
import {reducer as talks} from './components/TalksList';
import {reducer as details} from './components/Details';

export default combineReducers({
    details,
    talks,
});
