import axios from "axios";

import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const blogaxios = axios.create({
  baseURL: "https://87b4-103-10-31-107.in.ngrok.io",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  //   "Access-Control-Allow-Headers": "Content-Type",
  // },
});

blogaxios.interceptors.response.use(
  (res) => {
    if (res.data.access_token && res.data.refresh_token) {
      setHttpOnlyCookies(res.data.access_token, res.data.refresh_token);
    }

    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default blogaxios;
