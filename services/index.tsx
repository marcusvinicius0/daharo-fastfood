import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_AUTH_URL,
})