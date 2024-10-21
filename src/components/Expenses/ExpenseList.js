import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = holdings => {    
    if(holdings.items.length === 0){
        return <h2 className="expenses-list__fallBack">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {holdings.items.map(expense => (
            <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                price = {expense.price}
                date = {expense.date}
            />
            ))};
        </ul>
        );
}

export default ExpenseList;