import {createAction} from 'redux-actions';
import {
    SELECT_ROOM,
    TALKS_LOADED,
} from './TalksListActionTypes';
import {DUMMY_TALKS} from '../../assets/dummyData';

const talksLoaded = createAction(TALKS_LOADED);
export const selectRoom = createAction(SELECT_ROOM);

export const loadTalks = () =>
    (dispatch) => {
        // replace it with API call
        setTimeout(() => {
            dispatch(talksLoaded(DUMMY_TALKS));
        }, 1000);
    };
