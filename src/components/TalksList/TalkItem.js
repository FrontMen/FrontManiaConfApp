import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import FavoriteButton from '../FavoriteButton';
import styles from './TalksList.styles';

const TalkItem = ({
    id,
    title,
    speaker,
    speakerId,
    company,
    timeFrom,
    timeTo,
    isFavorite,
    style,
    onTalkPress,
    onSpeakerPress,
}) => (
    <View style={[styles.talkItemContainer, style]}>
        <TouchableWithoutFeedback onPress={() => onSpeakerPress(speakerId)}>
            <Text>IMG</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onTalkPress(id)}>
            <View style={styles.talkItemTextContainer}>
                <Text>{title}</Text>
                <Text>{speaker} ({company})</Text>
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
