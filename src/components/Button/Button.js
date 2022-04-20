import PropsTypes from 'prop-types';
import cn from 'classnames';

import s from './Button.module.scss';

const Button = ({black, children, isClick}) => {
  const handleButtonClick = () => {
    isClick();
  }

  return (
    <button className={cn(s.root, {
      [s.black]: black
    })} onClick={handleButtonClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  black: PropsTypes.bool,
  isClick: PropsTypes.func.isRequired
}

export default Button;