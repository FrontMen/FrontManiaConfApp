import {createAction} from 'redux-actions';
import {
    SPEAKER_DETAILS_CLEAR,
    SPEAKER_DETAILS_LOADED,
} from './SpeakerDetailsActionTypes';
import {DUMMY_SPEAKERS} from '../../assets/dummy/dummyData';

export const clearSpeakerDetails = createAction(SPEAKER_DETAILS_CLEAR);
const speakerDetailsLoaded = createAction(SPEAKER_DETAILS_LOADED);

export const loadSpeakerDetails = (id) =>
    (dispatch) => {
        const details = DUMMY_SPEAKERS.find((speaker) => speaker.id === id);
        dispatch(speakerDetailsLoaded(details));
    };
