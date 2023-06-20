import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganchttb.uz/api",
});

export default api;
