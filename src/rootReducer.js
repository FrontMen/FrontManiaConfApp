import {combineReducers} from 'redux';
import {reducer as dashboard} from './components/Dashboard';
import {reducer as details} from './components/Details';
import {reducer as rooms} from './components/RoomsMenu';

export default combineReducers({
    details,
    dashboard,
    rooms,
});
