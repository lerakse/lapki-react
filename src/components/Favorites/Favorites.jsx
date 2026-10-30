import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';
import { clearFavorites, removeFavorite, selectFavoriteIds } from '../../store/favoritesSlice.js';
import styles from './Favorites.module.css';

function Favorites({ pets }) {
  const ids = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();
  const favoritePets = pets.filter((pet) => ids.includes(pet.id));

  return (
    <section className={styles.favorites}>
      <div className={styles.head}>
        <h2 className={styles.title}>Избранное</h2>
        <span className={styles.count}>{favoritePets.length}</span>
      </div>

      {favoritePets.length === 0 ? (
        <p className={styles.empty}>Нажмите на сердечко в карточке питомца, чтобы добавить его сюда.</p>
      ) : (
        <ul className={styles.list}>
          {favoritePets.map((pet) => (
            <li key={pet.id} className={styles.item}>
              <span className={styles.name}>{pet.name}</span>
              <button type="button" className={styles.remove} onClick={() => dispatch(removeFavorite(pet.id))}>
                Убрать
              </button>
            </li>
          ))}
        </ul>
      )}

      <Button variant="secondary" size="small" disabled={favoritePets.length === 0} onClick={() => dispatch(clearFavorites())}>
        Очистить избранное
      </Button>
    </section>
  );
}

Favorites.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Favorites;
