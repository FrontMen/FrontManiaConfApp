import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from '../Icon';
import styles from './FavoriteButton.styles';

const FavoriteButton = ({id, isFavorite, toggleFavorite}) => (
    <TouchableWithoutFeedback onPress={() => toggleFavorite(id)}>
        <Icon name={isFavorite ? 'favorite' : 'favorite-border'} style={styles.favoriteButton}/>
    </TouchableWithoutFeedback>
);

export default FavoriteButton;
