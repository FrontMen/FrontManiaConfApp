import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadTalks} from './TalksListActions';
import TalksList from './TalksList';

const TalksListContainer = (props) => {
    React.useEffect(() => props.loadTalks(), []);

    return <TalksList {...props} />
};

const mapStateToProps = ({talks}) => ({
    talks: talks.talks,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadTalks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TalksListContainer);
