import React from 'react';
import {FlatList} from 'react-native';
import TalkItem from './TalkItem';
import styles from './TalksList.styles';

const TalksList = ({talks, goToTalkDetails, goToSpeakerDetails}) => {
    const renderItem = ({item, index}) => (
        <TalkItem
            {...{
                ...item,
                style: index === 0 ? styles.firstTalkItem : styles.talkItem,
                onTalkPress: goToTalkDetails,
                onSpeakerPress: goToSpeakerDetails,
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
