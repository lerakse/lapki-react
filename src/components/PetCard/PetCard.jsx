import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';
import styles from './PetCard.module.css';

function PetCard({ name, description, photo, urgent = false, onFavoriteChange, onOpen }) {
  const [pressed, setPressed] = useState(false);

  return (
    <article
      className={`${styles.card} ${pressed ? styles.pressed : ''}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      <div className={styles.photo}>
        {photo ? (
          <img className={styles.image} src={photo} alt={name} />
        ) : (
          <span className={styles.placeholder}>фото питомца</span>
        )}

        {urgent && <span className={styles.tag}>срочно</span>}

        <div
          className={styles.favorite}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <FavoriteButton onToggle={(value) => onFavoriteChange && onFavoriteChange(name, value)} />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div
          className={styles.actions}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <Button variant="secondary" size="small" fullWidth onClick={() => onOpen && onOpen(name)}>
            Смотреть анкету
          </Button>
        </div>
      </div>
    </article>
  );
}

PetCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
  urgent: PropTypes.bool,
  onFavoriteChange: PropTypes.func,
  onOpen: PropTypes.func,
};

export default PetCard;
