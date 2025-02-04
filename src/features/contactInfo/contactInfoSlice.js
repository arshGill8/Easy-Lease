import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "",
  streetNumber: "",
  streetName: "",
  po: "",
  city: "",
  province: "",
  postalCode: "",
  emailContact: false,
  emailContactInfo: "",
  emergencyContact: false,
  emergencyContactInfo: "",
};

export const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    updateContactInfo: (state, action) => {
      console.log(action.payload);
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateContactInfo } = contactInfoSlice.actions;

export default contactInfoSlice.reducer;

// const handleContactData = (e) => {
//   setContactData((prevContactData) => ({
//     ...prevContactData,
//     [e.target.name]: e.target.value,
//   }));
//   e.target.name === "emCont" && e.target.value === "No"
//     ? setContactData((prevContactData) => ({
//         ...prevContactData,
//         emContInfo: "",
//       }))
//     : "";
//   e.target.name === "emailNotice" && e.target.value === "No"
//     ? setContactData((prevContactData) => ({
//         ...prevContactData,
//         email: "",
//       }))
//     : "";
// };
