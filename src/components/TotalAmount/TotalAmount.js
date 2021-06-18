import React, { useContext } from 'react';

import Card from '../UI/Card';
import classes from './TotalAmount.module.css';
import PortfolioContext from '../../store/portfolio-context';

const TotalAmount = (props) => {
  const portfolioCtx = useContext(PortfolioContext);

  const totalAmount = portfolioCtx.cryptocurrencyPortfolio
    .filter((cryptocurrency) => {
      return cryptocurrency.amount > 0;
    })
    .reduce((acc, cryptocurency) => {
      return acc + cryptocurency.rate * cryptocurency.amount;
    }, 0)
    .toFixed(2);

  return (
    <Card className={classes.totalAmount}>
        <h1>{`$${totalAmount}`}</h1>
    </Card>
  );
};

export default TotalAmount;
