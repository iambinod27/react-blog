import axios from "axios";

import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const blogaxios = axios.create({
  baseURL: "http://54.172.81.137:8000",
});

blogaxios.interceptors.response.use(
  (res) => {
    console.log(res);
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
