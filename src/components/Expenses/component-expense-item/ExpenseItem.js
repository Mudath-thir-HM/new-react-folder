import React, {useState} from 'react';
import ExpenseDate from '../componentDate/ExpenseDate';
import Card from '../../Card-component/Card';
import './ExpenseItem.css'

const ExpenseItem = (holdings) => {

    const [title, setTitle] = useState(holdings.title);

    const buttonHandler = () => {
        setTitle('Updated!'); 
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date = {holdings.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${holdings.price}</div>
            </div>
            <button onClick={buttonHandler}>Change Title</button>
        </Card>
    )
};

export default ExpenseItem;