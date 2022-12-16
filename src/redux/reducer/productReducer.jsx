import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  arrProduct: [],
  productDetail: null,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      // nhan action.payload vao state.arrProduct
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductAction, getProductDetailAction } =
  productReducer.actions;

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

export const getProductByIdApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    const action = getProductDetailAction(result.data.content);
    console.log(action);
    dispatch(action);
  };
};
