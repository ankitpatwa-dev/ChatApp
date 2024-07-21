import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "Cart",
    initialState: {user:{

    }},
    reducers: {
        addInfo: (state, action) => {
            console.log('teting addinfo',state,action)
            // state.user = action.payload;
            Object.keys(action.payload).forEach(function (element) {
                state[element] = action.payload[element];
              });
        }
    }
})

export const { addInfo } = cartSlice.actions;

export default cartSlice.reducer;