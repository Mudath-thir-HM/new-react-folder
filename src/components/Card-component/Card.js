import './Card.css';

const Card = (holdings) => {
    const classes = 'card ' + holdings.className;
    return <div className={classes}>{holdings.children}</div>;
}

export default Card;