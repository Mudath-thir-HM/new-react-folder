import ExpenseDate from './ExpenseDate';
import Card from '../Card-component/Card';
import './ExpenseItem.css'

const ExpenseItem = (holdings) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date = {holdings.date}/>
                <div className='expense-item__description'>
                    <h2>{holdings.title}</h2>
                    <div className='expense-item__price'>${holdings.price}</div>
                </div>
            </Card>
        </li>
    )
};

export default ExpenseItem;