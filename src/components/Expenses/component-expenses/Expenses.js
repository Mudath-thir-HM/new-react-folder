import React, {useState} from "react";
import ExpenseItem from "../component-expense-item/ExpenseItem";
import Card from "../../Card-component/Card";
import ExpenseFilter from "../filter-component/ExpenseFilter";
import './Expenses.css'
 
const Expenses = (holdings) => {
    const [currentYear, setFilteredYear] =useState('2024');
    
    const filterChangerHandler = selectedYear => {
        setFilteredYear(selectedYear);
        
    }

    return (
        <Card className="expenses">
            <ExpenseFilter 
                selected = {currentYear} 
                onChangeFilter = {filterChangerHandler}
            /> 

            {holdings.items.map((expense) => 
                <ExpenseItem 
                    title = {expense.title}
                    price = {expense.price}
                    date = {expense.date}
                />)}
        </Card >
    )
}

export default Expenses;