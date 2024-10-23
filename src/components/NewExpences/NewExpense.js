import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (holdings) => {
    const [isEditing, setIsEditing] = useState(false);

    const getExpenseDataHandler = (eneredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...eneredExpenseData
        }
        holdings.onAddExpense(expenseData);

        setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return (
        <div className='new-expense'>

            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
            <ExpenseForm
                onGetExpense = {getExpenseDataHandler}
                onCancel = {stopEditingHandler}
                />

            )}
        </div>
    )
};

export default NewExpense;