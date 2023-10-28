import React from 'react';
import './Result.css'; // Result bileşeni için CSS dosyasını içe aktar

function Result(props) {
    if (!props.resultImage) {
        return null; // Sonuç resmi mevcut değilse hiçbir şey gösterme
    }

    return (
        <div className="result-container">
            <img className="result-image" src={props.resultImage} alt={props.coinSide} />
        </div>
    );
}

export default Result;