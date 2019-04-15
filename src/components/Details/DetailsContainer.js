import React from 'react';
import {connect} from 'react-redux';
import Details from './Details';
import {bindActionCreators} from 'redux';
import {
    clearDetails,
    loadDetails,
} from './DetailsActions';

const DetailsContainer = (props) => {
    React.useEffect(
        () => {
            props.loadDetails(props.id);
            return props.clearDetails;
        }, [props.id]);

    return <Details {...props}/>
};

const mapStateToProps = ({details}, props) => ({
    ...props,
    details,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    clearDetails,
    loadDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
