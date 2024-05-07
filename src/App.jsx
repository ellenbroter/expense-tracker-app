import React, { useState, useEffect } from 'react';
import './App.css';
import ChangePageTitle from './components/ChangePageTitle/ChangePageTitle';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const deleteExpenseHandler = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <>
      <ChangePageTitle pageTitle="Expense Tracker" />
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <ExpenseList items={expenses} onDeleteExpense={deleteExpenseHandler} />
      </div>
    </>
  );
};

export default App;
