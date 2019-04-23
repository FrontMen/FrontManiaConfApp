import React from 'react';
import {connect} from 'react-redux';
import TalkDetails from './TalkDetails';
import {bindActionCreators} from 'redux';
import {
    clearDetails,
    loadDetails,
} from './TalkDetailsActions';

const TalkDetailsContainer = (props) => {
    React.useEffect(
        () => {
            props.loadDetails(props.id);
            return props.clearDetails;
        }, [props.id]);

    return <TalkDetails {...props}/>
};

const mapStateToProps = ({talkDetails}, props) => ({
    ...props,
    ...talkDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    clearDetails,
    loadDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TalkDetailsContainer);
