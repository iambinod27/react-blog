import axios from "axios";

import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const blogaxios = axios.create({
  baseURL: "https://6bda-103-10-31-107.in.ngrok.io",
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
