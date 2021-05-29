import React, { useState } from 'react';

import NewCryptocurrency from './components/NewCryptocurrency/NewCryptocurrency';
import Portfolio from './components/Portfolio/Portfolio';
import Chart from './components/Chart/Chart';
import cryptocurrencyPortfolio from './components/Portfolio/CryptocurrencyPortfolio';

const App = () => {
  const [portfolio, setPortfolio] = useState(cryptocurrencyPortfolio);   
 
  const addCryptoHandler = (cryptocurrency) => {
    setPortfolio(prevPortfolio => {
      return (
        prevPortfolio.map(element => {
          if(element.name == cryptocurrency.name) {
            element.amount = cryptocurrency.amount;
          };
        
        return element;
        })       
      );
    });
  };
  
  return (
    <div>
      <NewCryptocurrency onAddExpense={addCryptoHandler}/>
      <Portfolio 
        items={portfolio}
      />
    </div>
  );
}

export default App;
