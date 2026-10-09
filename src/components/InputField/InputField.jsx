import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function InputField({ label, type = 'text', placeholder = '', required = false, onChange }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  let error = '';
  if (touched) {
    if (required && value.trim() === '') error = 'Заполните это поле';
    else if (type === 'email' && value && !EMAIL_RE.test(value)) error = 'Введите корректный email';
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const state = error ? styles.error : focused ? styles.focused : '';

  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input
        className={`${styles.input} ${state}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          setTouched(true);
        }}
      />
      {error && <span className={styles.message}>{error}</span>}
    </label>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputField;
