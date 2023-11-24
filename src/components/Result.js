// src/components/Result.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Result.css';

function Result() {
    const resultImage = useSelector((state) => state.coin.resultImage);
    const coinSide = useSelector((state) => state.coin.coinSide);

    if (!resultImage) {
        return null; // Sonuç resmi mevcut değilse hiçbir şey gösterme
    }

    return (
        <div className="result-container">
            <img className="result-image" src={resultImage} alt={coinSide} />
        </div>
    );
}

export default Result;
