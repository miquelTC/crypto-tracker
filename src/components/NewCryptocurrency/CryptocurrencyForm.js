import React, { useState } from 'react';

import dropDown from './CryptocurrencyDropDown';
import './CryptocurrencyForm.css';

const CryptocurrencyForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
   };

  const submitHandler = (event) => {
    event.preventDefault(); // this avoids the request being sent and page being reloaded

    const expenseData = {
      name: enteredName,
      amount: +enteredAmount
    };

    props.onSaveExpenseData(expenseData);
    setEnteredName('');
    setEnteredAmount('');
  };
  
  const dropDownHandler = dropDown.map(element => {
    return (<option>{element}</option>)
  });

  
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Name</label>
          <select value={enteredName} onChange={nameChangeHandler}>
            {dropDownHandler}
          </select>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            min='0.01'
            step='0.01'
            value={enteredAmount} 
            onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Cryptocurrency</button>
      </div>
    </form>
    )
};

export default CryptocurrencyForm;