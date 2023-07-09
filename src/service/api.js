import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganchttb.uz/api",
  // baseURL: "http://localhost:8080/api",
});

export default api;
