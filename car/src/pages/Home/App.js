import React, { useState } from 'react';
import './App.css'
import Routing from '../../Routing';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const goToLogin = () => {
    setCurrentScreen('Login');
  };

  const goBack = () => {
    setCurrentScreen('Home');
  };

  return (
    <>
      <Routing currentScreen={currentScreen} goToLogin={goToLogin} goBack={goBack} />
    </>
  );
}

export default App;
