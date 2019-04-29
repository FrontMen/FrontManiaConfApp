import React from 'react';
import {connect} from 'react-redux';
import {actions as dashboardAcxtions} from '../Dashboard';
import TalkOverviewModal from './TalkOverlapModal';
import {hideTalkOverlapModal} from './TalkOverlapModalAction';

const mapStateToProps = ({talkOverlapModal}) => ({
    ...talkOverlapModal,
});

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(hideTalkOverlapModal()),
    onApprove: (talkId, overlappedTalkId) => {
        dispatch(hideTalkOverlapModal());
        dispatch(dashboardAcxtions.applyFavoriteTalk(talkId, overlappedTalkId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TalkOverviewModal);
