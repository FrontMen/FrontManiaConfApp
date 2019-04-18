import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FavoriteButton from './FavoriteButton';
import {actions} from '../TalksList';

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleFavorite: actions.toggleFavorite,
}, dispatch);

export default connect(null, mapDispatchToProps)(FavoriteButton);
