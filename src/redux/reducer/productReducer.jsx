import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  arrProduct: [null],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { getProductAction } = productReducer.actions;

export default productReducer.reducer;

/* async function */
export const getAllProductApi = () => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    const action = getProductAction(result.data.content);
    console.log(action);
    dispatch(action);
  };
};
