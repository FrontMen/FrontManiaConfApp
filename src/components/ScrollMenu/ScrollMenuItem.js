import React from 'react';
import {Text, View} from 'react-native';
import styles from './ScrollMenu.styles';

const ScrollMenuItem = ({item, labelProp, index, selectedIndex, onItemClick}) => {
    const ref = React.useRef(null);

    return (
        <View
            ref={ref}
            style={index === 0 ? styles.scrollMenuItemFirst : styles.scrollMenuItem}
        >
            <Text
                style={
                    index === selectedIndex ? styles.scrollMenuItemTextSelected : styles.scrollMenuItemText
                }
                onPress={() => onItemClick(index, ref)}
            >
                {item[labelProp]}
            </Text>
        </View>
    )
};

export default ScrollMenuItem;
