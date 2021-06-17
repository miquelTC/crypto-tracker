import React, { useContext } from 'react';

import PortfolioItem from './PortfolioItem';
import './PortfolioList.css';
import PortfolioContext from '../../store/portfolio-context';

const PortfolioList = () => {
  const portfolioCtx = useContext(PortfolioContext);

  const filteredItems = portfolioCtx.cryptocurrencyPortfolio.filter(
    (cryptocurrency) => {
      return cryptocurrency.amount > 0;
    }
  );

  return (
    <ul className="portfolio-list">
      {filteredItems.map((cryptocurrency) => (
        <PortfolioItem
          key={cryptocurrency.id}
          image={cryptocurrency.image}
          symbol={cryptocurrency.symbol}
          amount={cryptocurrency.amount}
          rate={cryptocurrency.rate}
        />
      ))}
    </ul>
  );
};

export default PortfolioList;
