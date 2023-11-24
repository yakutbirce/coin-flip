import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
    name: 'coin',
    initialState: {
        coinSide: '',
        resultImage: null,
    },
    reducers: {
        flipCoin: (state, action) => {
            const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
            state.coinSide = randomSide;

            if (randomSide === 'heads') {
                state.resultImage = '/heads.png';
            } else {
                state.resultImage = '/tails.png';
            }
        },
    },
});

export const { flipCoin } = coinSlice.actions;
export default coinSlice.reducer;
