import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import FavoriteButton from '../FavoriteButton';
import styles from './TalksList.styles';

const TalkItem = ({id, title, author, company, timeFrom, timeTo, isFavorite, style, onPress}) => (
    <View style={[styles.talkItemContainer, style]}>
        <TouchableWithoutFeedback onPress={() => onPress(id)}>
            <View>
                <Text>{title}</Text>
                <Text>{author} ({company})</Text>
                <Text>{timeFrom} - {timeTo}</Text>
            </View>
        </TouchableWithoutFeedback>
        <FavoriteButton
            {...{
                id,
                isFavorite,
            }}
        />
    </View>
);

export default TalkItem;
