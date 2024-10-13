import ExpenseItem from "../component-expense-item/ExpenseItem";
import Card from "../Card-component/Card";
import './Expenses.css'
 
function Expenses(holdings){

    return (
        <Card className="expenses">
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