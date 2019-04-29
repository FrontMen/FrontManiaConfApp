import {createAction} from 'redux-actions';
import {
    SHOW_TALK_OVERLAP_MODAL,
    HIDE_TALK_OVERLAP_MODAL,
} from './TalkOverlapModalActionTypes';

export const showTalkOverlapModal = (talk, overlappedTalk) => ({
    type: SHOW_TALK_OVERLAP_MODAL,
    talk,
    overlappedTalk,
});
export const hideTalkOverlapModal = createAction(HIDE_TALK_OVERLAP_MODAL);
