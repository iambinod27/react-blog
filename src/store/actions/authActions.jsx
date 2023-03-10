import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";
import { getHttpOnlyCookies } from "../../utils/getHttpOnlyCookies";

const access_token = getHttpOnlyCookies("access_token");

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.post("/api/v1/auth/signup", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.post("/api/v1/auth/login", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const response = await blogaxios.get("/api/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
