import React from 'react';

const ExpenseList = (props) => {
  return (
    <ul>
      {props.items.map((expense) => (
        <li key={expense.id}>
          <div>
            <h2>{expense.title}</h2>
            <div>${expense.amount}</div>
            <div>{new Date(expense.date).toLocaleDateString()}</div>
            <div>{expense.category}</div>
          </div>
          <button onClick={props.onDeleteExpense.bind(null, expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;