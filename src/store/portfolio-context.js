import React, { useState, useEffect } from 'react';

const PortfolioContext = React.createContext({
  cryptocurrencyPortfolio: [],
  addCrypto: () => {}
});

export default PortfolioContext;

export const PortfolioProvider = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async() => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const data = await response.json();
    
    const transformedPortfolio = data.map(crypto => {
      return {
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        amount: 0,
        rate: crypto["current_price"],
        image: crypto.image
      }      
    })

    setPortfolio(transformedPortfolio) ;
  };

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

  const portfolioContext = {
    cryptocurrencyPortfolio: portfolio,
    addCrypto: addCryptoHandler
  };
  
  return (
    <PortfolioContext.Provider value={portfolioContext}>
      {props.children}
    </PortfolioContext.Provider>
  )
};