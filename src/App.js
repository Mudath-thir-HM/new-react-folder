import Expenses from "./components/Expenses/component-expenses/Expenses";
import NewExpense from "./components/UI/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      price: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      price: 799.9,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insuarance',
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      price: 450,
      date: new Date(2021, 5, 12),
    }
  ]

  return (
    <div>
      <NewExpense/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
