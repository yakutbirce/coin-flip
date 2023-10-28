import React, { useState } from 'react';
import './App.css';
import Coin from './components/Coin';
import Result from './components/Result';

function App() {
  const [coinSide, setCoinSide] = useState('');
  const [resultImage, setResultImage] = useState(null);

  const flipCoin = () => {
    const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
    setCoinSide(randomSide);

    if (randomSide === 'heads') {
      setResultImage('/heads.png');
    } else {
      setResultImage('/tails.png');
    }
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1>Coin Flipper</h1>
        <Coin flipCoin={flipCoin} />
        <Result resultImage={resultImage} coinSide={coinSide} />
      </div>
    </div>
  );
}

export default App;
