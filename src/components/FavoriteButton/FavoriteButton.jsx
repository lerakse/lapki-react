import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon.jsx';
import { selectIsFavorite, toggleFavorite } from '../../store/favoritesSlice.js';
import styles from './FavoriteButton.module.css';

function FavoriteButton({ petId }) {
  const active = useSelector(selectIsFavorite(petId));
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.active : ''}`}
      aria-pressed={active}
      aria-label={active ? 'Убрать из избранного' : 'Добавить в избранное'}
      onClick={() => dispatch(toggleFavorite(petId))}
    >
      <Icon name={active ? 'heart-filled' : 'heart'} size={22} />
    </button>
  );
}

FavoriteButton.propTypes = {
  petId: PropTypes.number.isRequired,
};

export default FavoriteButton;
