import {handleActions} from 'redux-actions';
import {
    TALK_DETAILS_CLEAR,
    TALK_DETAILS_LOADED,
} from './TalkDetailsActionTypes';

const reducer = handleActions({
    [TALK_DETAILS_CLEAR]: () => ({}),
    [TALK_DETAILS_LOADED]: (state, action) => action.payload,
}, {});

export default reducer;
