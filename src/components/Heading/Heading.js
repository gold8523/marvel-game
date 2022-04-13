import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.css';

const Heading = ({ level, className, black, children }) => {
    const el = `h${level}`;
    return React.createElement(el, {
        className: cn(s.root, className, {
            [s.colorBlack]: black
        })
    }, children)
}

Heading.defaultProps = {
    level: 1,
    black: false
}

Heading.propTypes = {
    level: propTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    className: propTypes.string,
    black: propTypes.bool,
    children: propTypes.node
}

export default Heading;