import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0
    }
export const counterSlice = createSlice({
    name: "counterr",
    initialState,
    reducers: {
        INCR: function (state) {  state.value += 1 },
        DECR: function (state) { state.value -= 1 }
    }
})
export const {INCR,DECR } = counterSlice.actions
export default counterSlice.reducer