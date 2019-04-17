import React from 'react';
import ScrollMenu from '../ScrollMenu';

const RoomsMenu = ({rooms, onRoomSelected}) => (
    <ScrollMenu
        items={rooms}
        keyProp="id"
        labelProp="name"
        onSelectionChanged={onRoomSelected}
    />
);

export default RoomsMenu;
