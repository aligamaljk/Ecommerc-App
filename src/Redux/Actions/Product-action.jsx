import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = "http://localhost:9000/PRODUCTS";
export const fetchProducts = createAsyncThunk("product/Api", async () => {
  const res = await axios(api);
  return await res.data;
});
export const actionsSlice = createSlice({
  initialState: [],
  name: "product",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // console.log(state);
      return action.payload;
    });
  },
});

export default actionsSlice.reducer;
