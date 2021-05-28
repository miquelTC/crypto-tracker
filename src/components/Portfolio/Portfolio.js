import React, { useState } from 'react';

import PortfolioItem from './PortfolioItem';
import Card from '../UI/Card';
import PortfolioList from './PortfolioList';
import PortfolioChart from './PortfolioChart';
import './Portfolio.css';

const Portfolio = (props) => {  
  return (
    <div> 
      <Card className="portfolio">
        <PortfolioList items={props.items}/>
      </Card>
    </div>
  );
}

export default Portfolio;