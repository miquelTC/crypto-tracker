import React from 'react'; // not needed in modern React, but this library is used under the wood

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm/>
    </div>
  );
};

export default NewExpense;