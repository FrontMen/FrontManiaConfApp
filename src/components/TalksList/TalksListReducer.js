import {handleActions} from 'redux-actions';
import {
    SELECT_ROOM,
    TALKS_LOADED,
} from './TalksListActionTypes';

const filterTalks = ({talks, roomId}) => talks.filter((talk) => talk.roomId === roomId);

const defaultState = {
    allTalks: [],
    selectedRoomId: NaN,
    talks: [],
};

const reducer = handleActions({
    [SELECT_ROOM]: (state, action) => ({
        ...state,
        selectedRoomId: action.payload,
        talks: filterTalks({
            talks: state.allTalks,
            roomId: action.payload,
        }),
    }),
    [TALKS_LOADED]: (state, action) => ({
        ...state,
        allTalks: action.payload,
        talks: filterTalks({
            talks: state.allTalks,
            roomId: state.selectedRoomId,
        }),
    }),
}, defaultState);

export default reducer;
