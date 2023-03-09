import axios from "axios";

const blogaxios = axios.create({
  baseURL: "https://6162-103-10-31-107.in.ngrok.io",
});

export default blogaxios;
