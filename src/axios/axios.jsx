import axios from "axios";

import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const blogaxios = axios.create({
  baseURL: "http://100.25.15.119:8000",
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
