import React from 'react';

import PortfolioItem from './PortfolioItem';
import './PortfolioList.css';

const PortfolioList = props => {
  const filteredItems = props.items.filter((cryptocurrency) => {
    return cryptocurrency.amount > 0
  });

  return <ul className="expenses-list">
    {filteredItems.map((cryptocurrency) => (
      <PortfolioItem 
        key={cryptocurrency.id} // Allows react to update the list in a more efficient way
        image={cryptocurrency.image}
        symbol={cryptocurrency.symbol} 
        amount={cryptocurrency.amount} 
        rate={cryptocurrency.rate}
      />
    ))}
  </ul>
};

export default PortfolioList;