import PropsTypes from 'prop-types';
import cn from 'classnames';

import s from './Button.module.scss';

const Button = ({black, children, onClick, type}) => {
  const handleButtonClick = () => {
    onClick && onClick();
  }

  return (
    <button className={cn(s.root, {
      [s.black]: black
    })} type={type} onClick={handleButtonClick}>
      <span>
        {children}
      </span>
    </button>
  );
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  black: PropsTypes.bool,
  onClick: PropsTypes.func,
  type: PropsTypes.string
}

export default Button;