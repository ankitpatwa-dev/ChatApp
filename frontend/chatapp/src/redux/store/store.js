import { configureStore } from '@reduxjs/toolkit'; 
import cartReducer from '../slice/slices';


export const store = configureStore({
    reducer:{
        userInfo: cartReducer,
    }
});