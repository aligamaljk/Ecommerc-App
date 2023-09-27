import { configureStore } from "@reduxjs/toolkit";
import actionsSlice from "../Actions/Product-action";
import cartSlice from "../Actions/Cart-action";
export const store = configureStore({
  reducer: {
    product: actionsSlice,
    cart: cartSlice,
  },
});
