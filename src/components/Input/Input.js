import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

import s from './Input.module.scss';

const Input = ({type, name, required, value, onChange}) => {
  // const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    // setInputValue(e.target.value);
    localStorage.setItem(e.target.name.toString(), e.target.value);
    onChange && onChange();
  }
  
  return (
    <>
      <input 
        type={type} 
        name={name} 
        required={required} 
        defaultValue={value}
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
