import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    popToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity -= 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    viewToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        state.push(action.payload);
      } else {
        return [];
      }
    },
    deleteToCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});

export const { addToCart, deleteToCart, viewToCart, clear, popToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
