import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganchttb.uz/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
