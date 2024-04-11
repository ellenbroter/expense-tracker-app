import React from 'react';

const TotalAmount = ({ expenses }) => {
	const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
 
	return <div>Total Amount: ${total}</div>;
 };

 export default TotalAmount;