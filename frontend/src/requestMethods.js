import axios from 'axios'

const BASE_URL = "https://blood-donation-and-bank-management-system.onrender.com/api/v1"

export const publicRequest = axios.create({
   baseURL: BASE_URL,
   withCredentials: true,
})

export const adminRequest = axios.create({
   baseURL: "https://blood-donation-and-bank-management-system.onrender.com/api/v1/admin",
   withCredentials: true,
});
