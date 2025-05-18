import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 4,
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

export const { pageIncrement, pageDecrement } = currentPageSlice.actions;

export default currentPageSlice.reducer;
