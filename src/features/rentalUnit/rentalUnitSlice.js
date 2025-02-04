import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "",
  streetNumber: "",
  streetName: "",
  city: "",
  postalCode: "",
  parkingSpace: "",
  inCondo: "",
};

export const rentalUnitSlice = createSlice({
  name: "rentalUnit",
  initialState,
  reducers: {
    updateRentalUnit: (state, action) => {
      console.log(action.payload);
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateRentalUnit } = rentalUnitSlice.actions;

export default rentalUnitSlice.reducer;

