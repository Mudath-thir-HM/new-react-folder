import './ExpenseDate.css'

const ExpenseDate = (holdings) => {
    const month = holdings.date.toLocaleString('en-US', {month: 'long'});
    const day = holdings.date.toLocaleString('en-US', {day: '2-digit'});
    const year = holdings.date.getFullYear();
    
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;