import { createSlice } from "@reduxjs/toolkit";
import removeHttpOnlyCookies from "../../../utils/removeHttpOnlyCookies";
import { checkUser, getUser, login, register } from "../../actions/authActions";

const initialState = {
  username: "",
  isLoading: true,
  isAuthenticated: false,
  error: null,
  success: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogout(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
      removeHttpOnlyCookies();
    },
  },
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
      state.isAuthenticated = false;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.message = "Login successfully";
      state.isAuthenticated = true;
      state.username = "admin";
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = payload;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = payload;
    },

    [checkUser.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    },
    [checkUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.username = "username";
    },
    [checkUser.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = payload;
    },
  },
});

export const { onLogout } = authSlice.actions;

export default authSlice.reducer;
