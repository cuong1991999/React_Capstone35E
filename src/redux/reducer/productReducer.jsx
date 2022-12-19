import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
const initialState = {
  //index
  arrProduct: [],
  //detail
  productDetail: null,
  //search
  arrSearch: [],
  sort: "",
  //cart
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    //index
    getProductAction: (state, action) => {
      // nhan action.payload vao state.arrProduct
      state.arrProduct = action.payload;
    },
    //detail
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
    //search
    getProductByKeyWordAction: (state, action) => {
      state.arrSearch = action.payload;
    },
    getFillterProductAction: (state, action) => {
      // set lai value cho sort
      state.sort = action.payload;
      // check gia tri "asc" and "desc" dung _.orderBy tu libary lodash de filter Ascending and Decrease gan array da filter vao arrSearch
      if (state.sort === "asc") {
        state.arrSearch = _.orderBy(
          state.arrSearch,
          [(item) => item.price],
          ["asc"]
        );
      } else if (state.sort === "desc") {
        state.arrSearch = _.orderBy(
          state.arrSearch,
          [(item) => item.price],
          ["desc"]
        );
      } else {
        return state.arrSearch;
      }
    },
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  getProductByKeyWordAction,
  getFillterProductAction,
} = productReducer.actions;

export default productReducer.reducer;

/* async function */
// lay san pham tu api ve
export const getAllProductApi = () => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    const action = getProductAction(result.data.content);
    // console.log(action);
    dispatch(action);
  };
};
// lay san pham qua id trong trang detail
export const getProductByIdApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    const action = getProductDetailAction(result.data.content);
    // console.log(action);
    dispatch(action);
  };
};
// lay san pham qua keyword trong trang search
export const getProductByKeyWordApi = (keyword) => {
  return async (dispatch) => {
    //nếu keyword khác null => call api
    if (keyword) {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
        method: "GET",
      });
      //Sau khi call api dựa vào từ khoá thành công thì dispatch len reducer
      const action = getProductByKeyWordAction(result.data.content);
      // console.log(action);
      dispatch(action);
    }
  };
};
