import axios from "axios";

export const umcServerNoAuth = axios.create({
  // baseURL: "/api",
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});
