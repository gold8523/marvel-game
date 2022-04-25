import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.scss';

const Heading = ({ level, className, white, children, backLine }) => {
    const el = `h${level}`;
    return React.createElement(el, {
        className: cn(s.root, className, {
            [s.color]: white,
            [s.backLine]: backLine
        })
    }, children)
}

Heading.defaultProps = {
    level: 1,
    white: false,
    backLine: false
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    className: PropTypes.string,
    white: PropTypes.bool,
    children: PropTypes.node,
    backLine: PropTypes.bool
}

export default Heading;