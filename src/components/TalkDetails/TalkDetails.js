import React from 'react';
import {Text, View} from 'react-native';
import styles from './TalkDetails.styles';

const TalkDetails = ({
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
        <Text>{timeFrom} - {timeTo}</Text>
    </View>
);

export default TalkDetails;
