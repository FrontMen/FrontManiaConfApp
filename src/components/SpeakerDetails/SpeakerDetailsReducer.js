import {handleActions} from 'redux-actions';
import {
    SPEAKER_DETAILS_CLEAR,
    SPEAKER_DETAILS_LOADED,
} from './SpeakerDetailsActionTypes';

const reducer = handleActions({
    [SPEAKER_DETAILS_CLEAR]: () => ({}),
    [SPEAKER_DETAILS_LOADED]: (state, action) => action.payload,
}, {});

export default reducer;
