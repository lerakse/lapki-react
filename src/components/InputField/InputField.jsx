import { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function InputField({ label, type = 'text', placeholder = '', required = false, onChange }) {
  const [value, setValue] = useState('');
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

  return (
    <TextField
      label={label}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={handleChange}
      onBlur={() => setTouched(true)}
      error={Boolean(error)}
      helperText={error || ' '}
      fullWidth
    />
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
