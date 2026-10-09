import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import styles from './BottomNav.module.css';

function BottomNav({ items, initialActive, onChange }) {
  const [activeId, setActiveId] = useState(initialActive || items[0].id);

  const handleSelect = (id) => {
    setActiveId(id);
    if (onChange) onChange(id);
  };

  return (
    <nav className={styles.nav}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        const color = isActive ? (item.accent === 'ai' ? styles.ai : styles.green) : styles.gray;
        return (
          <button
            key={item.id}
            type="button"
            className={`${styles.item} ${color}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => handleSelect(item.id)}
          >
            <Icon name={item.icon} size={24} />
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

BottomNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      accent: PropTypes.oneOf(['primary', 'ai']),
    }),
  ).isRequired,
  initialActive: PropTypes.string,
  onChange: PropTypes.func,
};

export default BottomNav;
