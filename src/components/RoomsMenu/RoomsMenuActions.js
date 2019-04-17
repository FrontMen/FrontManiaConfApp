import {createAction} from 'redux-actions';
import {ROOMS_LOADED} from './RoomsMenuActionTypes';
import {DUMMY_ROOMS} from '../../assets/dummyData';
import {actions} from '../TalksList';

const roomsLoaded = createAction(ROOMS_LOADED);

export const loadRooms = () =>
    (dispatch) => {
        // replace it with API call
        setTimeout(() =>
            Promise.resolve(DUMMY_ROOMS)
                .then((data) => {
                    dispatch(roomsLoaded(DUMMY_ROOMS));
                    return data;
                })
                .then((data) => dispatch(actions.selectRoom(data[0].id)))
        , 1000);
    };

export const selectRoom = actions.selectRoom;
