import './Card.css';

function Card(holdings){
    const classes = 'card ' + holdings.className;
    return <div className={classes}>{holdings.children}</div>;
}

export default Card;