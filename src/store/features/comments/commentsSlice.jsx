import { createSlice } from "@reduxjs/toolkit";
import { fetchPostComment } from "../../actions/commentsActions";

const initialState = {
  comments: [],
  isComment: true,
};

const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostComment.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPostComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
    },
    [fetchPostComment.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default commentsSlice.reducer;
