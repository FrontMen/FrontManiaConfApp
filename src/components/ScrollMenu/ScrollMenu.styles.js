import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const scrollMenuItemCommon = {
    marginLeft: width / 4,
};

const scrollMenuItemTextCommon = {
    fontSize: 14,
    color: '#999999',
};

const styles = StyleSheet.create({
    scrollMenu: {
        height: 30,
    },
    scrollMenuItem: {
        ...scrollMenuItemCommon,
    },
    scrollMenuItemFirst: {
        ...scrollMenuItemCommon,
        marginLeft: 0,
    },
    scrollMenuItemText: {
        ...scrollMenuItemTextCommon,
    },
    scrollMenuItemTextSelected: {
        ...scrollMenuItemTextCommon,
        fontWeight: '600',
        color: '#333333',
    },
});

export default styles;
