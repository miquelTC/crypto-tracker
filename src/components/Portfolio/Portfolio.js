import React from 'react';

import Card from '../UI/Card';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

const Portfolio = (props) => {  
  return ( 
    <Card className="portfolio">
      <PortfolioList items={props.items}/>
    </Card>
  );
}

export default Portfolio;