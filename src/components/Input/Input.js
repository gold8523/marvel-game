import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

import s from './Input.module.scss';

const Input = ({type, name, required, value, onChange}) => {
  const [inputValue, setInputValue] = useState('');
  const ref = useRef(null);

  const handleChangeInput = (e) => {
    setInputValue(value);
    // localStorage.setItem(`${e.target.name}`, e.target.value);
    onChange && onChange({[e.target.name]: e.target.value});
  }
  
  return (
    <>
      <input 
        type={type} 
        name={name} 
        required={required} 
        value={value}
        onChange={handleChangeInput} 
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default Input;
