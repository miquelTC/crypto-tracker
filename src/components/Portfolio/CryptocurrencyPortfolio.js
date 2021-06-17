// import React, { useState } from 'react';

// import logos from '../UI/Logos';

// const cryptocurrencyPortfolio = [
//   { id: 0, name: 'Bitcoin', symbol: 'BTC', amount: 1, rate: 40000, image: logos[0] },
//   { id: 1, name: 'Ethereum', symbol: 'ETH', amount: 30, rate: 3000, image: logos[1] },
//   { id: 2, name: 'Cardano', symbol: 'ADA', amount: 10000, rate: 2, image: logos[2] },
//   { id: 3, name: 'Ripple', symbol: 'XRP', amount: 5000, rate: 1, image: logos[3] },
//   { id: 4, name: 'Polkadot', symbol: 'DOT', amount: 0, rate: 23, image: logos[4] },
//   { id: 5, name: 'Uniswap', symbol: 'UNI', amount: 0, rate: 30, image: logos[5] },
//   { id: 6, name: 'Chainlink', symbol: 'LINK', amount: 0, rate: 35, image: logos[6] }
// ];

// const getPortfolio = async() => {
//   const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
//   const data = await response.json();
  
//   const cryptocurrencyPortfolio = data.map(crypto => {
//     return {
//       id: crypto.id,
//       symbol: crypto.symbol,
//       amount: 0,
//       rate: crypto[current_price],
//       image: crypto.image
//     }
//   })
// }



// export default cryptocurrencyPortfolio;