import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const TalkItem = ({ id, title, author, company, timeFrom, timeTo, style, onPress }) => (
    <TouchableHighlight style={style} onPress={() => onPress(id)} underlayColor="#dedede">
        <View>
            <Text>{title}</Text>
            <Text>{author} ({company})</Text>
            <Text>{timeFrom} - {timeTo}</Text>
        </View>
    </TouchableHighlight>
);

export default TalkItem;
