import React, { useState, useContext } from 'react';

import './CryptocurrencyForm.css';
import PortfolioContext from '../../store/portfolio-context';

const CryptocurrencyForm = (props) => {
  const [enteredName, setEnteredName] = useState('Bitcoin');
  const [enteredAmount, setEnteredAmount] = useState('');
  
  const portfolioCtx = useContext(PortfolioContext); 
  
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
   };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      amount: +enteredAmount
    };

    portfolioCtx.addCrypto(expenseData);

    setEnteredName('');
    setEnteredAmount('');
  };
  
  const dropDownHandler = portfolioCtx.cryptocurrencyPortfolio.map(element => {
    return (<option value={element.name}>{element.name}</option>)
  });

  
  return (
    <form onSubmit={submitHandler}>
      <div className='new-cryptocurrency__controls'>
        <div className='new-cryptocurrency__control'>
          <label>Name</label>
          <select value={enteredName} onChange={nameChangeHandler}>
            {dropDownHandler}
          </select>
        </div>
        <div className='new-cryptocurrency__control'>
          <label>Amount</label>
          <input 
            type='number' 
            min='0'
            step='0.01'
            value={enteredAmount} 
            onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className='new-cryptocurrency__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Cryptocurrency</button>
      </div>
    </form>
    )
};

export default CryptocurrencyForm;