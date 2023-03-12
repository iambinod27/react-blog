import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";

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
