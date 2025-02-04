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

export const propertyInfoSlice = createSlice({
  name: "propertyInfo",
  initialState,
  reducers: {
    updatePropertyInfo: (state, action) => {
      console.log(action.payload);
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePropertyInfo } = propertyInfoSlice.actions;

export default propertyInfoSlice.reducer;

// const handlepropertyData = (e) => {
//   setpropertyData((prevpropertyData) => ({
//     ...prevpropertyData,
//     [e.target.name]: e.target.value,
//   }));
