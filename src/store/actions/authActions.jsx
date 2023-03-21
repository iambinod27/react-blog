import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import blogaxios from "../../axios/axios";
import { getHttpOnlyCookies } from "../../utils/getHttpOnlyCookies";

const access_token = getHttpOnlyCookies("access_token");

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await blogaxios.post("/api/v1/auth/signup", payload, {
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.data;
      return data;
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
      Navigate("/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    console.log(access_token);
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

export const checkUser = createAsyncThunk("auth/valid", async () => {
  try {
    const response = await blogaxios.post(
      "/api/v1/auth/token/valid",
      {},
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
});
