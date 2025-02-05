import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ tenantName: "", tenantSign: "", tenantSignDate: "" }];

export const tenantSignatureSlice = createSlice({
  name: "tenantSignature",
  initialState,
  reducers: {
    updateTenantSignature(state, action) {
      const { index, data } = action.payload;
      state[index] = {
        ...state[index],
        ...data,
      };
    },
    addTenantSignature(state) {
      state.push({
        tenantName: "",
        tenantSign: "",
        tenantSignDate: "",
      });
    },
    removeTenantSignature(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateTenantSignature,
  addTenantSignature,
  removeTenantSignature,
} = tenantSignatureSlice.actions;

export default tenantSignatureSlice.reducer;
