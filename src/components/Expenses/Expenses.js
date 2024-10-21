import React, {useState} from "react";
import ExpenseList from "./ExpenseList";
import Card from "../Card-component/Card";
import ExpenseFilter from "./filter-component/ExpenseFilter";
import './Expenses.css'
 
const Expenses = (holdings) => {
    const [currentYear, setFilteredYear] =useState('2024');
    const filterChangerHandler = (selectedYear) => {
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
            <ExpenseList items = {filteredExpenses}/>
        </Card >
    )
}

export default Expenses;