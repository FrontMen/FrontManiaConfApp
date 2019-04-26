import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import Moment from 'moment';
import FavoriteButton from '../FavoriteButton';
import styles from './TalksList.styles';

const TalkItemComponent = ({
    id,
    title,
    speaker,
    speakerId,
    speakerImg,
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
            <View style={styles.talkItemImageContainer}>
                <Image
                    style={styles.talkItemImage}
                    source={{uri: speakerImg}}
                    resizeMode="contain"
                />
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onTalkPress(id)}>
            <View style={styles.talkItemTextContainer}>
                <Text>{title}</Text>
                <Text>{speaker} ({company})</Text>
                <Text>{Moment(timeFrom).format('HH:mm')} - {Moment(timeTo).format('HH:mm')}</Text>
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

const TalkItem = (props) =>
    React.useMemo(() =>
        TalkItemComponent(props), [
            props.id,
            props.isFavorite,
        ]
    );

export default TalkItem;
