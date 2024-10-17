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
                onchangefilter = {filterChangerHandler}
            /> 

            
            <ExpenseItem
                title={holdings.items[0].title}
                price={holdings.items[0].price}
                date={holdings.items[0].date}
            />
            <ExpenseItem        
                title={holdings.items[1].title}
                price={holdings.items[1].price}
                date={holdings.items[1].date}
            />
            <ExpenseItem        
                title={holdings.items[2].title}
                price={holdings.items[2].price}
                date={holdings.items[2].date}
            />
            <ExpenseItem        
                title={holdings.items[3].title}
                price={holdings.items[3].price}
                date={holdings.items[3].date}
            />
        </Card >
    )
}

export default Expenses;