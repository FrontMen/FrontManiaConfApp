import React from 'react';
import {FlatList} from 'react-native';
import TalkItem from './TalkItem';
import styles from './TalksLIst.styles';

const TalksList = ({talks, goToDetails}) => {
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
            data={talks}
            renderItem={renderItem}
        />
    );
};

export default TalksList;
