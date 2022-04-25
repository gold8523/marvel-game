import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Text.module.scss';

const Text = ({
    element, 
    children, 
    className, 
    strong, 
    italic, 
    disabled}) => {
    return React.createElement(element, {
        className: cn(s.root, className, {
            [s.strong]: strong,
            [s.italic]: italic,
            [s.disabled]: disabled
        })
    }, children);
}

Text.defaultProp = {
    element: 'div',
    strong: false,
    italic: false,
    disabled: false
}

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Text;