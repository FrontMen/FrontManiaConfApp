import React from 'react';
import Moment from 'moment';
import {Text, View} from 'react-native';
import styles from './TalkDetails.styles';

const TalkDetailsComponent = ({
    title,
    speaker,
    company,
    timeFrom,
    timeTo,
    description,
}) => (
    <View style={styles.talkDetails}>
        <Text style={styles.talkDetailsTitle}>{title}</Text>
        <Text>{speaker} ({company})</Text>
        <Text style={styles.talkDetailsDescription}>{description}</Text>
        <Text>{Moment(timeFrom).format('HH:mm')} - {Moment(timeTo).format('HH:mm')}</Text>
    </View>
);

const TalkDetails = (props) =>
    React.useMemo(() =>
        TalkDetailsComponent(props), [
            props.title,
        ]
    );

export default TalkDetails;
