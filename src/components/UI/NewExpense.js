import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (holdings) => {
    const getExpenseDataHandler = (eneredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...eneredExpenseData
        }
        holdings.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onGetExpense = {getExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;