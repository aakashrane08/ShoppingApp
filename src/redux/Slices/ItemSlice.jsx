import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const ItemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers : {
    openItem: (state, action) => {
      state.push(action.payload);
    }
    // deleteItem: (state, action) => {

    // }
  }
});

export const {openItem, deleteItem}= ItemSlice.actions;
export default ItemSlice.reducer;