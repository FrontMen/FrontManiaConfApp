import {handleActions} from 'redux-actions';
import {
    TOGGLE_FAVORITE_TALK,
    SELECT_ROOM,
    TALKS_LOADED,
} from './DashboardActionTypes';

const filterTalks = ({talks, roomId}) => talks.filter((talk) => talk.roomId === roomId);

const defaultState = {
    allTalks: [],
    selectedRoomId: NaN,
    talks: [],
};

const reducer = handleActions({
    [TOGGLE_FAVORITE_TALK]: (state, action) => {
        const allTalks = state.allTalks.map((talk) => {
            if (talk.id === action.payload) {
                return {
                    ...talk,
                    isFavorite: !talk.isFavorite,
                }
            }
            return talk;
        });
        return {
            ...state,
            allTalks,
            talks: filterTalks({
                talks: allTalks,
                roomId: state.selectedRoomId,
            }),
        }
    },
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
