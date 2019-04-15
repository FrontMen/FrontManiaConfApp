import React from 'react';
import {Text, View} from 'react-native';
import styles from './Details.styles';

const Details = ({details: {
    title,
    author,
    company,
    timeFrom,
    timeTo,
    description,
}}) => (
    <View style={styles.details}>
        <Text style={styles.detailsTitle}>{title}</Text>
        <Text>{author} ({company})</Text>
        <Text style={styles.detailsDescription}>{description}</Text>
        <Text>{timeFrom} - {timeTo}</Text>
    </View>
);

export default Details;
