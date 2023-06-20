import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganchttb.uz/api",
  headers: {
    "Access-Control-Allow-Origin": "https://api.urganchttb.uz/",
    "Content-Type": "application/json",
  },
});

export default api;
