import PropTypes from 'prop-types';
import home from '../../assets/icons/home.svg';
import paw from '../../assets/icons/paw.svg';
import ai from '../../assets/icons/ai.svg';
import heart from '../../assets/icons/heart.svg';
import heartFilled from '../../assets/icons/heart-filled.svg';
import coins from '../../assets/icons/coins.svg';
import arrow from '../../assets/icons/arrow.svg';
import styles from './Icon.module.css';

const ICONS = { home, paw, ai, heart, 'heart-filled': heartFilled, arrow, donate: coins };

function Icon({ name, size = 24 }) {
  const url = `url("${ICONS[name]}")`;
  return (
    <span
      className={styles.icon}
      aria-hidden="true"
      style={{ width: size, height: size, WebkitMaskImage: url, maskImage: url }}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  size: PropTypes.number,
};

export default Icon;
