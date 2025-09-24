import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",

  initialState: {
    productDetails: {},
    checkoutStatus: false,
    checkoutDetails: {},
  },

  reducers: {
    setProductDetails: (state, actions) => {
      state.productDetails = actions.payload;
    },

    setModifiedPrice: (state, actions) => {
      const quantity = Number(actions.payload);
      const singlePrice = state.productDetails.singlePrice;

      if (!isNaN(singlePrice) && quantity >= 1) {
        state.productDetails.price = quantity * singlePrice;
      } else {
        console.warn("Invalid price or quantity");
      }
    },

    setCheckoutStatus: (state, actions) => {
      if (actions.payload) {
        state.checkoutStatus = true;
      } else {
        state.checkoutStatus = false;
      }
    },

    setCheckoutDetails: (state, actions) => {
      state.checkoutDetails = actions.payload;
      console.log("Checkout details set successfully ", state.checkoutDetails);
    },
  },
});

export const {
  setProductDetails,
  setModifiedPrice,
  setCheckoutStatus,
  setCheckoutDetails,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
