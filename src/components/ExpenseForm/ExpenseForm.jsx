import React, { useState, useRef } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  // State variables to store the form input values
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  // State variable to store error message for form validation
  const [errorMessage, setErrorMessage] = useState('');

  // Ref to the title input field
  const titleInputRef = useRef(null);

  // Handler function for form submission
  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation: check if any of the fields are empty
    if (title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Create an expense object with the form input values
    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date).toISOString(),
      category: category || '-',
    };

    // Call the onAddExpense function passed as a prop to add the expense
    props.onAddExpense(expenseData);

    // Clear the form input values and error message
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
    setErrorMessage('');

    // Set focus back to the title input field
    titleInputRef.current.focus();
  };

  // Render the form
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