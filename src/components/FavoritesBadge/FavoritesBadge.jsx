import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon.jsx';
import { selectFavoritesCount } from '../../store/favoritesSlice.js';
import styles from './FavoritesBadge.module.css';

function FavoritesBadge() {
  const count = useSelector(selectFavoritesCount);

  return (
    <div className={styles.badge} aria-label={`В избранном: ${count}`}>
      <Icon name="heart-filled" size={20} />
      <span className={styles.count}>{count}</span>
    </div>
  );
}

export default FavoritesBadge;
