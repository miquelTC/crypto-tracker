import React, { useState } from 'react';

import NewCryptocurrency from './components/NewCryptocurrency/NewCryptocurrency';
import Portfolio from './components/Portfolio/Portfolio';
import Modal from './components/UI/Modal';
import { PortfolioProvider } from './store/portfolio-context';

const App = () => {    
  const [isValid, setIsValid] = useState(true);

  const enableModalHandler = () => {
    setIsValid(false);
  }

  const disableModalHandler = () => {
    setIsValid(true);
  }
  
  return (
    <PortfolioProvider onEnableModal={enableModalHandler} onDisableModal={disableModalHandler} >
      {!isValid && <Modal onDisableModal={disableModalHandler} />}      
      <NewCryptocurrency />       
      <Portfolio />
    </PortfolioProvider>
  );
}

export default App;