import React from 'react';
import {View} from 'react-native';
import TalksList from '../TalksList';
import styles from './FavoriteList.styles';

const FavoriteList = ({talks, goToDetails}) => (
    <View style={styles.favoriteList}>
        <TalksList
            {...{
                talks,
                goToDetails,
            }}
        />
    </View>
);

export default FavoriteList;
