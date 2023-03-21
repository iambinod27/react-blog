import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";
import { getHttpOnlyCookies } from "../../utils/getHttpOnlyCookies";

const access_token = getHttpOnlyCookies("access_token");

export const getAllposts = createAsyncThunk(
  "api/getAllposts",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.get("/api/v1/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          limit: 10,
          offset: 0,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostDetail = createAsyncThunk(
  "api/getPostDetails",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.get(`/api/v1/post/${payload}`);
      const data = await response.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue("Post not found");
    }
  }
);

export const createPost = createAsyncThunk(
  "/api/createPost",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.post(`api/v1/post`, payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
