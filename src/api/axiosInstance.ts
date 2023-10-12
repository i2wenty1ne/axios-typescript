import axios, { AxiosError } from "axios";

import api from "./api";
import { baseURL } from "./apiConfig";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});

export default axiosInstance;
