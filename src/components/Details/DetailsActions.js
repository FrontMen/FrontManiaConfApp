import {
    TALK_DETAILS_CLEAR,
    TALK_DETAILS_LOADED,
} from './DetailsActionTypes';
import {createAction} from 'redux-actions';

export const clearDetails = createAction(TALK_DETAILS_CLEAR);
const detailsLoaded = createAction(TALK_DETAILS_LOADED);

export const loadDetails = (id) =>
    (dispatch, getState) => {
        const {talks} = getState().talks;
        const details = talks.find((talk) => talk.id === id);
        dispatch(detailsLoaded(details));
    };
