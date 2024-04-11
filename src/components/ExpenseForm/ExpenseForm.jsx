import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0) {
      setErrorMessage('Please fill out all mandatory fields.');
      return;
    }

    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date).toISOString(),
      category: category || '-',
    };

    props.onAddExpense(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="housing">Housing</option>
        <option value="grocery">Grocery</option>
        <option value="transportation">Transportation</option>
        <option value="clothes">Clothes</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default ExpenseForm;