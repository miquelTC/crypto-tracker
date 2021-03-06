import React, { useState } from 'react';

import CryptocurrencyForm from './CryptocurrencyForm';
import classes from './NewCryptocurrency.module.css';

const NewCryptocurrency = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };   

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className={classes['new-cryptocurrency']}>
      {}
      {!isEditing && <button onClick={startEditingHandler}>Add New Cryptocurrency</button>}
      {isEditing && <CryptocurrencyForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewCryptocurrency;