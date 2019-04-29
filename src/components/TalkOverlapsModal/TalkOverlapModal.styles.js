import {StyleSheet} from 'react-native';
import {BODY_PADDING} from '../../styles/variables';

const styles = StyleSheet.create({
    talkOverlapsModal: {
        padding: BODY_PADDING,
    },
    talkOverlapsModalButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default styles;
