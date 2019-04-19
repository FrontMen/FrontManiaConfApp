import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadTalks} from './DashboardActions';
import Dashboard from './Dashboard';

const DashboardContainer = (props) => {
    React.useEffect(() => props.loadTalks(), []);

    return <Dashboard {...props} />
};

const mapStateToProps = ({dashboard}) => ({
    talks: dashboard.talks,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadTalks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
