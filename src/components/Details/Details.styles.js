import {StyleSheet} from 'react-native';
import {BODY_PADDING} from '../../styles/variables';

const styles = StyleSheet.create({
    details: {
        padding: BODY_PADDING,
        height: '100%',
    },
    detailsTitle: {
        fontWeight: '600',
    },
    detailsDescription: {
        marginTop: 10,
        marginBottom: 10,
    }
});

export default styles;
