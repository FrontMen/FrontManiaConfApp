import React from 'react';
import {ScrollView, findNodeHandle} from 'react-native';
import ScrollMenuItem from './ScrollMenuItem';
import styles from './ScrollMenu.styles';

const ScrollMenu = ({items, selectedId, keyProp, labelProp, style, onSelectionChanged}) => {
    const scrollView = React.useRef(null);

    const onItemClick = (item, itemRef) => {
        onSelectionChanged(item[keyProp]);

        // TODO: Find how to scroll to element knowing only its id
        // TODO: Add centering element after scroll
        itemRef.current.measureLayout(
            findNodeHandle(scrollView.current),
            (x, y) => scrollView.current.scrollTo({x, animated: true})
        )
    };

    return (
        <ScrollView
            ref={scrollView}
            style={{...styles.scrollMenu, ...style}}
            horizontal={true}
        >
            {
                items.map((item, index) => (
                    <ScrollMenuItem {...{
                        key: keyProp ? item[keyProp] : item,
                        item,
                        index,
                        labelProp,
                        isSelected: item[keyProp] === selectedId,
                        onItemClick,
                    }}/>
                ))
            }
        </ScrollView>
    )
};

export default ScrollMenu;
