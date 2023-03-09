import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../actions/authActions";

const initialState = {
  username: null,
  access_token: null,
  refresh_token: null,
  isLoading: true,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
