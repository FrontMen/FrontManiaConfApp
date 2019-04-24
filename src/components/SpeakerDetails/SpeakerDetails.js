import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './SpeakerDetails.styles';

const SpeakerDetails = ({img, name}) => (
    <View style={styles.speakerDetailsContainer}>
        <Image
            source={{uri: img}}
            style={styles.speakerDetailsImage}
            resizeMode="contain"
        />
        <Text>{name}</Text>
    </View>
);

export default SpeakerDetails;
