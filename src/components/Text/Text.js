import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import s from './Text.module.css';

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
    element: propTypes.oneOf(['div', 'p', 'span']).isRequired,
    children: propTypes.node,
    className: propTypes.string,
    strong: propTypes.bool,
    italic: propTypes.bool,
    disabled: propTypes.bool
}

export default Text;