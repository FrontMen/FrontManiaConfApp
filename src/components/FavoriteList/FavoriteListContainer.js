import {connect} from 'react-redux';
import FavoriteList from './FavoriteList';

const mapStateToProps = ({dashboard}) => ({
    talks: dashboard.allTalks.filter((talk) => talk.isFavorite),
});

export default connect(mapStateToProps, null)(FavoriteList);
