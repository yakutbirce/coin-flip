// src/App.js
import React from 'react';
import './App.css';
import Coin from './components/Coin';
import Result from './components/Result';

function App() {
  return (
    <div className="app-container">
      <div className="app-card">
        <h1>Coin Flipper</h1>
        <Coin />
        <Result />
      </div>
    </div>
  );
}

export default App;
