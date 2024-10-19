import React, {useState} from "react";
import ExpenseItem from "../component-expense-item/ExpenseItem";
import Card from "../../Card-component/Card";
import ExpenseFilter from "../filter-component/ExpenseFilter";
import './Expenses.css'
 
const Expenses = (holdings) => {
    const [currentYear, setFilteredYear] =useState('2024');
    
    const filterChangerHandler = selectedYear => {
        setFilteredYear(selectedYear);  
    };

    const filteredExpenses = holdings.items.filter(expense => {
        return expense.date.getFullYear().toString() === currentYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter 
                selected = {currentYear} 
                onChangeFilter = {filterChangerHandler}
            /> 

            {filteredExpenses.map((expense) => 
                <ExpenseItem 
                    key = {expense.id}
                    title = {expense.title}
                    price = {expense.price}
                    date = {expense.date}
                />)}
        </Card >
    )
}

export default Expenses;