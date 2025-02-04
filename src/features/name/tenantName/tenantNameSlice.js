import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ tenantFirstName: "", tenantLastName: "" }];

export const tenantNameSlice = createSlice({
  name: "tenantName",
  initialState,
  reducers: {
    updateTenantName(state, action) {
      console.log(action, state);
      const { index, data } = action.payload;
      state[index] = {
        ...state[index],
        ...data,
      };
    },
    addTenantName(state) {
      state.push({ tenantFirstName: "", tenantLastName: "" });
    },
    removeTenantName(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTenantName, addTenantName, removeTenantName } =
  tenantNameSlice.actions;

export default tenantNameSlice.reducer;
