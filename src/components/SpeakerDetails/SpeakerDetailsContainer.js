import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SpeakerDetails from './SpeakerDetails';
import {
    clearSpeakerDetails,
    loadSpeakerDetails,
} from './SpeakerDetailsActions';

const SpeakerDetailsContainer = (props) => {
    React.useEffect(
        () => {
            props.loadSpeakerDetails(props.id);
            return props.clearSpeakerDetails;
        }, [props.id]);

    return (
        <SpeakerDetails {...props} />
    )
};

const mapStateToProps = ({speakerDetails}) => ({
    ...speakerDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    clearSpeakerDetails,
    loadSpeakerDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerDetailsContainer);
