import propTypes from 'prop-types';
import cn from 'classnames';
import s from './Container.module.scss';

const Container = ({ children, className }) => {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: propTypes.node,
    className: propTypes.string
}

export default Container;