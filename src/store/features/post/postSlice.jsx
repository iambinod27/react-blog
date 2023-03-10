import { createSlice } from "@reduxjs/toolkit";
import { getAllposts } from "../../actions/postActions";

const initialState = {
  postItems: [],
  isLoading: true,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllposts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllposts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.postItems = payload;
    },
    [getAllposts.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
  },
});

export default postSlice.reducer;
