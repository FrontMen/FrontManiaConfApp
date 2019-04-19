import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RoomsMenu from './RoomsMenu';
import {loadRooms, selectRoom} from './RoomsMenuActions';

const RoomsMenuContainer = (props) => {
    React.useEffect(props.loadRooms, []);

    return (
        <RoomsMenu {...props} />
    )
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadRooms,
    onRoomSelected: selectRoom,
}, dispatch);

const mapStateRoProps = (state) => ({
    rooms: state.rooms,
    selectedRoomId: state.dashboard.selectedRoomId,
});

export default connect(mapStateRoProps, mapDispatchToProps)(RoomsMenuContainer);
