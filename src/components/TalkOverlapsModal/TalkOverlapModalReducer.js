import {handleActions} from 'redux-actions';
import {
    SHOW_TALK_OVERLAP_MODAL,
    HIDE_TALK_OVERLAP_MODAL,
} from './TalkOverlapModalActionTypes';

const defaultState = {
    isVisible: false,
};

const reducer = handleActions({
    [SHOW_TALK_OVERLAP_MODAL]: (state, {talk, overlappedTalk}) => ({
        isVisible: true,
        talk,
        overlappedTalk,
    }),
    [HIDE_TALK_OVERLAP_MODAL]: (state, action) => ({
        isVisible: false,
    }),
}, defaultState);

export default reducer;
