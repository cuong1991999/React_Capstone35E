import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegister: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
});

export const {} = userReducer.actions;

export default userReducer.reducer;
