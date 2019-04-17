import React from 'react';
import {ScrollView, findNodeHandle} from 'react-native';
import ScrollMenuItem from './ScrollMenuItem';
import styles from './ScrollMenu.styles';

const ScrollMenu = ({items, keyProp, labelProp, style, onSelectionChanged}) => {
    const scrollView = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onItemClick = (index, itemRef) => {
        setSelectedIndex(index);
        onSelectionChanged(items[index].id);

        itemRef.current.measureLayout(
            findNodeHandle(scrollView.current),
            (x, y) => scrollView.current.scrollTo({x, animated: true})
        );
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
                        selectedIndex,
                        onItemClick,
                    }}/>
                ))
            }
        </ScrollView>
    )
};

export default ScrollMenu;
