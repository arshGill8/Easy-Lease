import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    pageIncrement: (state) => {
      state.value += 1;
    },
    pageDecrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pageIncrement, pageDecrement } = currentPageSlice.actions;

export default currentPageSlice.reducer;
