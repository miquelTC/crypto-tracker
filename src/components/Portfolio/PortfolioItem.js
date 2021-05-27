import React from 'react';

import Card from '../UI/Card';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
   
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">          
          <img src={props.image} style={{height: 50, width: 50}}/> 
          <h2>{props.symbol}</h2>         
          <h2>{props.name}</h2>
          <h2>{`${props.amount} ${props.symbol}`}</h2>
          <div className="expense-item__price">${props.amount * props.rate}</div>
        </div>
      </Card>
    </li>
  );
};

export default PortfolioItem;
