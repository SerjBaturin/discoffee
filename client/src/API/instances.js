import axios from "axios";

/**
 * Create Axios instance with default settings.
 */
export const instance = axios.create({
  baseURL: "http://localhost:5555/api",
  withCredentials: true,
});
