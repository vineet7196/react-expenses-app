import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "Groceries",
  //   amount: 800,
  //   date: new Date(2022, 7, 30)
  // },
  // { id: "e2", 
  // title: "New TV", 
  // amount: 43000, 
  // date: new Date(2021, 2, 12) 
  // },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 4760,
  //   date: new Date(2021, 2, 28)
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 2500,
  //   date: new Date(2021, 5, 12)
  // },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
