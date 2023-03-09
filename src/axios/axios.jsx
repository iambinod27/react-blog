import axios from "axios";

const blogaxios = axios.create({
  baseURL: "https://d6d4-103-10-28-210.in.ngrok.io",
  "Access-Control-Allow-Origin": "*",
});

export default blogaxios;
