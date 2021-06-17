import React from 'react';

import Card from '../UI/Card';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
  const removeCryptoHandler = () => {
    props.onItemRemove(props.id);
  }
  
  return (
    <li>
      <Card className="portfolio-item">
        <div className="portfolio-item__description">          
          <img src={props.image} style={{height: 50, width: 50}}/> 
          <h2>{props.symbol}</h2>         
          <h2>{props.name}</h2>
          <h2>{`${props.amount} ${props.symbol}`}</h2>
          <div className="portfolio-item__price">${(props.amount * props.rate).toFixed(2)}</div>
          <div className="portfolio-item__cancel" onClick={removeCryptoHandler}>X</div>
        </div>
      </Card>
    </li>
  );
};

export default PortfolioItem;
