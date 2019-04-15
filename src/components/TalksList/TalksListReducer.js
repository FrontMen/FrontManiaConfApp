import {handleActions} from 'redux-actions';
import {TALKS_LOADED} from './TalksListActionTypes';

const reducer = handleActions({
    [TALKS_LOADED]: (state, action) => action.payload,
}, []);

export default reducer;
