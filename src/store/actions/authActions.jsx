import { createAsyncThunk } from "@reduxjs/toolkit";
import blogaxios from "../../axios/axios";
import { URL } from "../../utils/url";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      //   const response = await blogaxios.post("/api/v1/auth/signup", payload, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": true,
      //     },
      //   });
      const response = await fetch(`${URL}/api/v1/auth/signup`, {
        method: "POST",
        mode: "no-cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return response.json();
      //   return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      //   const response = await blogaxios.post("/api/v1/auth/login", payload, {
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const data = await response.data;
      //   return data;
      //   const response = await fetch(`${URL}/api/v1/auth/login`, {
      //     method: "POST",
      //     mode: "no-cors",
      //     credentials: "same-origin",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   });
      //   const data = await response.json();
      //   localStorage.setItem("userToken", data.access_token);
      //   thunkAPI.fulfillWithValue("Login successfully");
      //   return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
