import React from 'react';
import Conversor from './components/conversor';
import './app.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="conversores">
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
    </div>
  );
}

export default App;
