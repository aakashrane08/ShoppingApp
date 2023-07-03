import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import WishSlice from "./Slices/WishSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice,
        wish: WishSlice,
    }
})