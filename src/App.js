import React, { useState, useEffect } from 'react';

import NewCryptocurrency from './components/NewCryptocurrency/NewCryptocurrency';
import Portfolio from './components/Portfolio/Portfolio';
import Chart from './components/Chart/Chart';
//import cryptocurrencyPortfolio from './components/Portfolio/CryptocurrencyPortfolio';

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  
  useEffect(() => {
    fetchPortfolio();
  }, []);
  
  const fetchPortfolio = async() => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    
    const cryptocurrencyPortfolio = data.map(crypto => {
      return {
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        amount: 0,
        rate: crypto["current_price"],
        image: crypto.image
      }      
    })

    setPortfolio(cryptocurrencyPortfolio) ;
  }     
 
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
      <NewCryptocurrency onAddExpense={addCryptoHandler} portfolio={portfolio} />
      <Portfolio 
        items={portfolio}
      />
    </div>
  );
}

export default App;
