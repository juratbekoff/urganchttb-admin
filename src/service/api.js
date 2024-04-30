import axios from "axios";

const api = axios.create({
    baseURL: "https://api.urganch-ttb.uz/api",
    // baseURL: "http://localhost:8080/api",
});

export default api;
