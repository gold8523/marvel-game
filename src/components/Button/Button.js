import PropsTypes from 'prop-types';
import cn from 'classnames';

import s from './Button.module.scss';

const Button = ({black, children, onClick}) => {
  const handleButtonClick = () => {
    onClick && onClick();
  }

  return (
    <button className={cn(s.root, {
      [s.black]: black
    })} onClick={handleButtonClick}>
      <span>
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  black: PropsTypes.bool,
  onClick: PropsTypes.func
}

export default Button;