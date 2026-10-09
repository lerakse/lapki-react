import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import styles from './FavoriteButton.module.css';

function FavoriteButton({ initialActive = false, onToggle }) {
  const [active, setActive] = useState(initialActive);

  const handleClick = () => {
    const next = !active;
    setActive(next);
    if (onToggle) onToggle(next);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.active : ''}`}
      aria-pressed={active}
      aria-label={active ? 'Убрать из избранного' : 'Добавить в избранное'}
      onClick={handleClick}
    >
      <Icon name={active ? 'heart-filled' : 'heart'} size={22} />
    </button>
  );
}

FavoriteButton.propTypes = {
  initialActive: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default FavoriteButton;
