import axios from "axios";

import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const blogaxios = axios.create({
  baseURL: "http://35.174.204.92:8000",
});

blogaxios.interceptors.response.use(
  (res) => {
    if (res.data.access_token && res.data.username) {
      setHttpOnlyCookies(res.data.access_token, res.data.username);
    }

    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default blogaxios;
