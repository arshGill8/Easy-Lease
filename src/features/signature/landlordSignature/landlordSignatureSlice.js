import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { landlordName: "", landlordSign: "", landlordSignDate: "" },
];

export const landlordSignatureSlice = createSlice({
  name: "landlordSignature",
  initialState,
  reducers: {
    updateLandlordSignature(state, action) {
      console.log(state);
      const { index, data } = action.payload;
      state[index] = {
        ...state[index],
        ...data,
      };
    },
    addLandlordSignature(state) {
      state.push({
        landlordName: "",
        landlordSign: "",
        landlordSignDate: "",
      });
    },
    removeLandlordSignature(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateLandlordSignature,
  addLandlordSignature,
  removeLandlordSignature,
} = landlordSignatureSlice.actions;

export default landlordSignatureSlice.reducer;

// const [landlordList, setLandlordList] = useState([{ landlord: "" }]);

// const handleLandlordSignChange = (value, index, property) => {
//   setLandlordSignList((prevLandlordSignList) =>
//     prevLandlordSignList.map((item, i) =>
//       i === index
//         ? {
//             ...item,
//             [property]: value,
//           }
//         : item
//     )
//   );
// };

// const handleLandlordSignAdd = () => {
//   setLandlordSignList([
//     ...landlordSignList,
//     { landlordName: "", landlordSign: "", landlordSignDate: "" },
//   ]);
// };
// const handleLandlordSignRemove = (index) => {
//   const list = [...landlordSignList];
//   list.splice(index, 1);
//   setLandlordSignList(list);
// };
