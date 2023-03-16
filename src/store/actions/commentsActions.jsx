import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";
import { getHttpOnlyCookies } from "../../utils/getHttpOnlyCookies";

const access_token = getHttpOnlyCookies("access_token");

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

export const createPostComment = createAsyncThunk(
  "post/createComments",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.post(
        `/api/v1/post/${payload.id}/comments`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
