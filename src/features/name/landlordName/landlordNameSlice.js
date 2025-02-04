import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ landlordName: "" }];

export const landlordNameSlice = createSlice({
  name: "landlordName",
  initialState,
  reducers: {
    updateLandlordName: (state, action) => {
      const { index, data } = action.payload;
      state[index] = {
        ...state[index],
        ...data,
      };
    },
    addLandlordName: (state) => {
      state.push({ landlordName: "" });
    },
    removeLandlordName: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { updateLandlordName, addLandlordName, removeLandlordName } =
  landlordNameSlice.actions;

export default landlordNameSlice.reducer;
