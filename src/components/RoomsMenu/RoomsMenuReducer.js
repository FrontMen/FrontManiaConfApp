import {handleActions} from 'redux-actions';
import {ROOMS_LOADED} from './RoomsMenuActionTypes';

const reducer = handleActions({
    [ROOMS_LOADED]: (state, action) => action.payload,
}, []);

export default reducer;
