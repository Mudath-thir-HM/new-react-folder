import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const getExpenseDataHandler = (eneredExpenseData) => {
        const expenseData = {
            ...eneredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onGetExpense = {getExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;