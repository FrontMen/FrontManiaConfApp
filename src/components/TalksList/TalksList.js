import React from 'react';
import {View, FlatList} from 'react-native';
import {DUMMY_ROOMS} from '../../assets/dummyData';
import ScrollMenu from '../ScrollMenu';
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
        <View style={styles.tasksListView}>
            <ScrollMenu
                items={DUMMY_ROOMS}
                keyProp="id"
                labelProp="name"
                onSelectionChanged={(item) => console.log(item)}
            />
            <FlatList
                keyExtractor={({title}) => title}
                data={talks}
                renderItem={renderItem}
                style={styles.talksList}
            />
        </View>
    );
};

export default TalksList;
