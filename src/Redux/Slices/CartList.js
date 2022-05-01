import { createSlice } from "@reduxjs/toolkit";

const sliceObject = {
  name: "CartList",
  initialState: {
    cart: [],
  },
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
   
    },
  },
};
const cartSlice = createSlice(sliceObject);

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;