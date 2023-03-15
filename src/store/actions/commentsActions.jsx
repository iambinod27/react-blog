import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";

export const fetchPostComment = createAsyncThunk(
  "post/comment",
  async (id, thunkAPI) => {
    try {
      const response = await blogaxios.get(`api/v1/post/${id}/comments`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
