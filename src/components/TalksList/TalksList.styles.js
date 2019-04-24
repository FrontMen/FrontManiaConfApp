import {StyleSheet} from 'react-native';

const talkItem = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dedede',
    padding: 10,
};

const styles = StyleSheet.create({
    talkItem: {
        ...talkItem,
        marginTop: 10,
    },
    firstTalkItem: {
        ...talkItem,
    },
    talkItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    talkItemTextContainer: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    talkItemImageContainer: {
        width: 50,
        height: '100%',
    },
    talkItemImage: {
        flex: 1,
        height: undefined,
        width: undefined,
    }
});

export default styles;
