import axios from "axios";

export const instanceGET = axios.create({
  method: "GET",
  baseURL: "http://localhost:5555/api",
  withCredentials: true,
});

export const instancePOST = axios.create({
  baseURL: "http://localhost:5555/api",
  withCredentials: true,
});
