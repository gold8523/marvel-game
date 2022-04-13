import s from './style.module.css';

const Heading = ({title}) => {
    return (
        <h1 className={s.root}>
            {title}
        </h1>
    )
}

export default Heading;