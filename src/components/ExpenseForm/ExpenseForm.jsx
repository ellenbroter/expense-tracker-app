import React, { useState, useRef } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const titleInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0) {
      setErrorMessage('Please fill out all fields.');
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
    titleInputRef.current.focus();
  };

  return (
    <form onSubmit={submitHandler} className={styles['expense-form']}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles['input-field']}
        ref={titleInputRef}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={styles['input-field']}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles['input-field']}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles['input-field']}
      >
        <option value="">Select Category</option>
        <option value="housing">Housing</option>
        <option value="grocery">Grocery</option>
        <option value="transportation">Transportation</option>
        <option value="clothes">Clothes</option>
        <option value="other">Other</option>
      </select>
      <button type="submit" className={styles['submit-button']}>
        Add Expense
      </button>
      {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
    </form>
  );
};

export default ExpenseForm;