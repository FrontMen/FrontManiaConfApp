import {createAction} from 'redux-actions';
import {
    TOGGLE_FAVORITE_TALK,
    SELECT_ROOM,
    TALKS_LOADED,
} from './DashboardActionTypes';
import {DUMMY_TALKS} from '../../assets/dummy/dummyData';
import {actions as talkOverlapModalActions} from '../TalkOverlapsModal';

const talksLoaded = createAction(TALKS_LOADED);
const toggleFavoriteAction = createAction(TOGGLE_FAVORITE_TALK);
export const selectRoom = createAction(SELECT_ROOM);

const getFavoriteTalks = (talks) => talks.filter((talk) => talk.isFavorite);

const getTalkOverlapsWithFavorite = (favoriteTalks, talk) =>
    favoriteTalks.find((item) => (
        (item.timeFrom >= talk.timeFrom && item.timeFrom <= talk.timeTo) || // (| from | to) or (| from to |)
        (item.timeTo >= talk.timeFrom && item.timeTo <= talk.timeTo) || // (from | to |) or (| from to |)
        (item.timeFrom <= talk.timeFrom && item.timeTo >= talk.timeTo) // (from | | to)
    ));

export const toggleFavorite = (talkId) =>
    (dispatch, getState) => {
        const {allTalks} = getState().dashboard;
        const found = allTalks.find((talk) => talk.id === talkId);

        const favoriteTalks = getFavoriteTalks(allTalks);
        const overlapped = !found.isFavorite && getTalkOverlapsWithFavorite(favoriteTalks, found);
        if (!overlapped) {
            // for favorite talk or talk non-favorite talk that doesn't overlaps with any favorite
            return dispatch(toggleFavoriteAction(talkId));
        }

        return dispatch(talkOverlapModalActions.showTalkOverlapModal(found, overlapped));

    };

export const loadTalks = () =>
    (dispatch) => {
        // replace it with API call
        setTimeout(() => {
            dispatch(talksLoaded(DUMMY_TALKS));
        }, 1000);
    };

export const applyFavoriteTalk = (talkId, overlappedTalkId) =>
    (dispatch) => {
        dispatch(toggleFavoriteAction(overlappedTalkId));
        dispatch(toggleFavoriteAction(talkId));
    };
