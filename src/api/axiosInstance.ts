import axios from "axios";

// https://notice-board-backend-alpha.vercel.app/api
 export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 1000,
  headers: {
        'Content-Type': 'application/json',
    },
});
