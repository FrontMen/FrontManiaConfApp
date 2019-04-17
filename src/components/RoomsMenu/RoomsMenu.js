import React from 'react';
import ScrollMenu from '../ScrollMenu';

const RoomsMenu = ({rooms, selectedRoomId, onRoomSelected}) => (
    <ScrollMenu
        items={rooms}
        selectedId={selectedRoomId}
        keyProp="id"
        labelProp="name"
        onSelectionChanged={onRoomSelected}
    />
);

export default RoomsMenu;
