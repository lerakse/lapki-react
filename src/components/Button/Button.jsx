import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import styles from './Button.module.css';

function Button({ children, variant = 'primary', size = 'medium', icon, fullWidth = false, disabled = false, onClick }) {
  const [state, setState] = useState('default');

  const className = [
    styles.button,
    styles[variant],
    styles[size],
    styles[state],
    fullWidth ? styles.full : '',
  ].join(' ');

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('default')}
      onMouseDown={() => setState('pressed')}
      onMouseUp={() => setState('hover')}
    >
      {children}
      {icon && <Icon name={icon} size={20} />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'small']),
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
