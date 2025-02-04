import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentDeposit: "",
  depositAmount: "",
  rentDiscount: "",
  rentDiscountDesc: "",
  keyDeposit: "",
  keyDepAmount: "",
  keyDepositDesc: "",
  smoking: "",
  smokingRules: "",
  tenantInsurance: "",
  addTerm: "",
};

export const depositInfoSlice = createSlice({
  name: "depositInfo",
  initialState,
  reducers: {
    updateDepositInfo: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDepositInfo } = depositInfoSlice.actions;

export default depositInfoSlice.reducer;
