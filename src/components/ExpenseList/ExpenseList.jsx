import React from 'react';
import TotalAmount from '../TotalAmount/TotalAmount';
import styles from './ExpenseList.module.css'


const ExpenseList = (props) => {
  return (
    <div>
      <table className={styles['expense-table']}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>${expense.amount}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={props.onDeleteExpense.bind(null, expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TotalAmount expenses={props.items} />
    </div>
  );
};

export default ExpenseList;