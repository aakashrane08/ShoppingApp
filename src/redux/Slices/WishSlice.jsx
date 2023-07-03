import { createSlice } from "@reduxjs/toolkit";

export const WishSlice = createSlice({
    name:"wish",
    initialState:[],
    reducers:{
        add1:(state, action) => {
            state.push(action.payload);
        },
        remove1:(state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add1, remove1} = WishSlice.actions;
export default WishSlice.reducer;