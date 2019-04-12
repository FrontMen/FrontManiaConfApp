import React from 'react';
import { FlatList } from 'react-native';
import TalkItem from './TalkItem';
import styles from './TalksLIst.styles';

const data = [{
    id: '1',
    title: 'How to eat React hooks',
    author: 'Michael Jackson',
    company: 'Jackson five',
    timeFrom: '10:00',
    timeTo: '10:45',
}, {
    id: '2',
    title: 'The feature of AngularJS',
    author: 'James Bond',
    company: 'Mi6',
    timeFrom: '11:00',
    timeTo: '11:45',
}, {
    id: '3',
    title: 'Why Vue',
    author: 'Lara Andersen',
    company: 'Disney',
    timeFrom: '12:00',
    timeTo: '12:45',
}];

const TalksList = ({goToDetails}) => {
    const renderItem = ({item, index}) => (
        <TalkItem
            {...{
                ...item,
                style: index === 0 ? styles.firstTalkItem : styles.talkItem,
                onPress: goToDetails,
            }}
        />
    );

    return (
        <FlatList
            keyExtractor={({title}) => title}
            data={data}
            renderItem={renderItem}
            style={styles.talksList}
        />
    );
};

export default TalksList;
