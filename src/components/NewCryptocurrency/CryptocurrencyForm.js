import React, { useState, useContext } from 'react';

import classes from './CryptocurrencyForm.module.css';
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

    const cryptoData = {
      name: enteredName,
      amount: +enteredAmount
    };

    portfolioCtx.addCrypto(cryptoData);

    setEnteredName('Bitcoin');
    setEnteredAmount('');
  };
  
  const dropDownHandler = portfolioCtx.cryptocurrencyPortfolio.map(element => {
    return (<option value={element.name} key={element.id}>{element.name}</option>)
  });
  
  return (
    <form onSubmit={submitHandler}>
      <div className={classes['new-cryptocurrency__controls']}>
        <div className={classes['new-cryptocurrency__control']}>
          <label>Name</label>
          <select value={enteredName} onChange={nameChangeHandler}>
            {dropDownHandler}
          </select>
        </div>
        <div className={classes['new-cryptocurrency__control']}>
          <label>Amount</label>
          <input 
            type='number' 
            min='0'
            step='0.01'
            value={enteredAmount} 
            onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className={classes['new-cryptocurrency__actions']}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Cryptocurrency</button>
      </div>
    </form>
    )
};

export default CryptocurrencyForm;