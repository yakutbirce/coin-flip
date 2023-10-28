import React from 'react';
import './Coin.css'; // Coin bileşeni için CSS dosyasını içe aktar

function Coin(props) {
    return (
        <div className="coin-container">
            <button className="flip-button" onClick={props.flipCoin}>
                Flip Coin
            </button>
        </div>
    );
}

export default Coin; 