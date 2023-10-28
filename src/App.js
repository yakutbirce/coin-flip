import React, { useState } from 'react';
import './App.css';
import Coin from './components/Coin';
import Result from './components/Result';

function App() {
  const [coinSide, setCoinSide] = useState(''); // İlk değeri boş olarak ayarlandı.
  const [resultImage, setResultImage] = useState(null);

  const flipCoin = () => {
    const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
    setCoinSide(randomSide);

    if (randomSide === 'heads') {
      setResultImage('/heads.png'); // Resim dosyasının yolu
    } else {
      setResultImage('/tails.png'); // Resim dosyasının yolu
    }
  };

  return (
    <div className="app-container"> {/* Kart görünümü için bir konteyner ekleyin */}
      <div className="app-card"> {/* Kartın içeriği */}
        <h1>Coin Flipper</h1>
        <Coin flipCoin={flipCoin} />
        <Result resultImage={resultImage} coinSide={coinSide} />
      </div>
    </div>
  );
}

export default App;
