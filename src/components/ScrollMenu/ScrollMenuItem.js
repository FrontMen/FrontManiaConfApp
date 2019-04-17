import React from 'react';
import {Text, View} from 'react-native';
import styles from './ScrollMenu.styles';

const ScrollMenuItem = ({item, labelProp, index, isSelected, onItemClick}) => {
    const ref = React.useRef(null);

    return (
        <View
            ref={ref}
            style={index === 0 ? styles.scrollMenuItemFirst : styles.scrollMenuItem}
        >
            <Text
                style={isSelected ? styles.scrollMenuItemTextSelected : styles.scrollMenuItemText}
                onPress={() => onItemClick(item, ref)}
            >
                {item[labelProp]}
            </Text>
        </View>
    );
};

export default ScrollMenuItem;
