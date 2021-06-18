import React from 'react';

import Card from '../UI/Card';
import PortfolioList from './PortfolioList';
import TotalAmount from '../TotalAmount/TotalAmount';
import classes from './Portfolio.module.css';

const Portfolio = (props) => {  
  return ( 
    <Card className={classes.portfolio}>
      <TotalAmount />
      <PortfolioList items={props.items}/>
    </Card>
  );
}

export default Portfolio;