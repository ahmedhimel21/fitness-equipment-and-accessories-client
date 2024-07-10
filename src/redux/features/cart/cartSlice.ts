import { createSlice } from "@reduxjs/toolkit";
import { TCartInitialState } from "../../../types";

const initialState: TCartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToCart(state, action) {
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity < action.payload.stock) {
          existingProduct.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { setToCart } = cartSlice.actions;

export default cartSlice.reducer;
