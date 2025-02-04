import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gas: "",
  ac: "",
  addStore: "",
  laundry: "",
  guestPark: "",
  otherUtil1: "",
  otherUtilText1: "",
  electricity: "",
  heat: "",
  water: "",
  tenantUtilDetails: "",
};

export const utilityInfoSlice = createSlice({
  name: "utilityInfo",
  initialState,
  reducers: {
    updateUtilityInfo: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUtilityInfo } = utilityInfoSlice.actions;

export default utilityInfoSlice.reducer;
