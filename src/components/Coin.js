// src/components/Coin.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { flipCoin } from '../redux/coinSlice';
import './Coin.css';

function Coin() {
    const dispatch = useDispatch();

    return (
        <div className="coin-container">
            <button className="flip-button" onClick={() => dispatch(flipCoin())}>
                Flip Coin
            </button>
        </div>
    );
}

export default Coin;
