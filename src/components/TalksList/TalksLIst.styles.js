import { StyleSheet } from 'react-native';

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
});

export default styles;
