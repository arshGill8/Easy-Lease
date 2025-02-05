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

export const leaseTermInfoSlice = createSlice({
  name: "leaseTermInfo",
  initialState,
  reducers: {
    updateLeaseTermInfo: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLeaseTermInfo } = leaseTermInfoSlice.actions;

export default leaseTermInfoSlice.reducer;
