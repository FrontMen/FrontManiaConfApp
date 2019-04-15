import {createAction} from 'redux-actions';
import {TALKS_LOADED} from './TalksListActionTypes';

const data = [{
    id: '1',
    title: 'How to eat React hooks',
    author: 'Michael Jackson',
    company: 'Jackson five',
    timeFrom: '10:00',
    timeTo: '10:45',
}, {
    id: '2',
    title: 'The feature of AngularJS',
    author: 'James Bond',
    company: 'Mi6',
    timeFrom: '11:00',
    timeTo: '11:45',
}, {
    id: '3',
    title: 'Why Vue',
    author: 'Lara Andersen',
    company: 'Disney',
    timeFrom: '12:00',
    timeTo: '12:45',
}];

const talksLoaded = createAction(TALKS_LOADED);

export const loadTalks = () =>
    (dispatch) => {
        // replace it with API call
        setTimeout(() => {
            dispatch(talksLoaded(data));
        }, 1000);
    };
