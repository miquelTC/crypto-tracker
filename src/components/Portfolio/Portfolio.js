import React from 'react';

import Card from '../UI/Card';
import PortfolioList from './PortfolioList';
import classes from './Portfolio.module.css';

const Portfolio = (props) => {  
  return ( 
    <Card className={classes.portfolio}>
      <PortfolioList items={props.items}/>
    </Card>
  );
}

export default Portfolio;