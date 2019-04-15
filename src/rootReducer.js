import {combineReducers} from 'redux';
import {reducer as talks} from './components/TalksList';

export default combineReducers({
    talks,
});
