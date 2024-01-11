import { createSlice } from "@reduxjs/toolkit";
/**   JSON--> from one place to another place JSON.stringify(serialization) JSON.parse(deserialize) */
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            state.push(action.payload)            
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions;

export default cartSlice.reducer;