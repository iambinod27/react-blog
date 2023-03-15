import { createSlice } from "@reduxjs/toolkit";
import { getAllposts, getPostDetail } from "../../actions/postActions";

const initialState = {
  postItems: [],
  SelectedPost: {},
  isLoading: true,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    removeSelectedPost: (state) => {
      state.SelectedPost = {};
    },
  },
  extraReducers: {
    [getAllposts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllposts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postItems = payload;
    },
    [getAllposts.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostDetail.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.SelectedPost = payload;
    },
    [getPostDetail.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
  },
});

export const { removeSelectedPost } = postSlice.actions;

export default postSlice.reducer;
