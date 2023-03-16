import { createSlice } from "@reduxjs/toolkit";
import {
  createPostComment,
  fetchPostComment,
} from "../../actions/commentsActions";

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
      state.isComment = true;
    },
    [fetchPostComment.fulfilled]: (state, { payload }) => {
      state.isComment = false;
      state.comments = payload;
    },
    [fetchPostComment.rejected]: (state) => {
      state.isComment = true;
    },
    [createPostComment.pending]: (state) => {
      state.isComment = true;
    },
    [createPostComment.fulfilled]: (state, { payload }) => {
      state.isComment = false;
    },
    [createPostComment.rejected]: (state) => {
      state.isComment = true;
    },
  },
});

export default commentsSlice.reducer;
