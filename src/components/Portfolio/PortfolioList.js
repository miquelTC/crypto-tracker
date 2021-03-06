import React, { useContext } from 'react';

import PortfolioItem from './PortfolioItem';
import classes from './PortfolioList.module.css';
import PortfolioContext from '../../store/portfolio-context';

const PortfolioList = () => {
  const portfolioCtx = useContext(PortfolioContext);

  const filteredItems = portfolioCtx.cryptocurrencyPortfolio.filter(
    (cryptocurrency) => {
      return cryptocurrency.amount > 0;
    }
  );

  return (
    <ul className={classes['portfolio-list']}>
      {filteredItems.map((cryptocurrency) => (
        <PortfolioItem
          key={cryptocurrency.id}
          id={cryptocurrency.id}
          image={cryptocurrency.image}
          symbol={cryptocurrency.symbol}
          amount={cryptocurrency.amount}
          rate={cryptocurrency.rate}
          onItemRemove={portfolioCtx.removeCrypto}
        />
      ))}
    </ul>
  );
};

export default PortfolioList;
