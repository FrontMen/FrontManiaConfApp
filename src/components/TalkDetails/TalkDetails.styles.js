import {StyleSheet} from 'react-native';
import {BODY_PADDING} from '../../styles/variables';

const styles = StyleSheet.create({
    talkDetails: {
        padding: BODY_PADDING,
        height: '100%',
    },
    talkDetailsTitle: {
        fontWeight: '600',
    },
    talkDetailsDescription: {
        marginTop: 10,
        marginBottom: 10,
    }
});

export default styles;
