import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/authService';

const cartSlice = createSlice({
    name: "Cart",
    initialState: authService.getCurrentUserInfo(),
    reducers: {
        addInfo: (state, action) => {
            console.log('teting addinfo',state,action)
            // state.user = action.payload;
            Object.keys(action.payload).forEach(function (element) {
                state[element] = action.payload[element];
              });
        },
        removeInfo: (state, action) => {
            const state_len = Object.keys(state);
            state_len.forEach(function (element){
                delete state[element];
            })
        }
    }
})

export const { addInfo,removeInfo } = cartSlice.actions;

export default cartSlice.reducer;