import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "",
  tenancyType: "",
  fixedTenDate: "",
  otherTenDetails: "",
  rentDay: "",
  rentType: "",
  otherRentDetails: "",
  baseRent: "",
  parkingRent: "",
  totalRent: "",
  payTo: "",
  payMethod: "",
  partPeriod: "",
  partRent: "",
  partDate: "",
  coverDateFrom: "",
  coverDateTo: "",
  nsfCharge: "",
  // otherUtil1: "",
  // otherUtil2: "",
  // otherUtil3: "",
};

export const termTenancySlice = createSlice({
  name: "termTenancy",
  initialState,
  reducers: {
    updateTermTenancy: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTermTenancy } = termTenancySlice.actions;

export default termTenancySlice.reducer;
