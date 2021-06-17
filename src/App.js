import React from 'react';

import NewCryptocurrency from './components/NewCryptocurrency/NewCryptocurrency';
import Portfolio from './components/Portfolio/Portfolio';
import { PortfolioProvider } from './store/portfolio-context';

const App = () => {  
  return (
    <PortfolioProvider>
      <NewCryptocurrency />
      <Portfolio />
    </PortfolioProvider>
  );
}

export default App;
