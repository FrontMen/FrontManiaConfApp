import React from 'react';
import {View} from 'react-native';
import TalksList from '../TalksList';
import styles from './FavoriteList.styles';

const FavoriteList = ({talks, goToTalkDetails, goToSpeakerDetails}) => (
    <View style={styles.favoriteList}>
        <TalksList
            {...{
                talks,
                goToTalkDetails,
                goToSpeakerDetails,
            }}
        />
    </View>
);

export default FavoriteList;
