


import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL;
console.log("API URL:", BASE_URL);

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});

// 🔥 ADD THIS
publicRequest.interceptors.request.use((config) => {
   const hospital = JSON.parse(localStorage.getItem("hospital"));
   const hospital = JSON.parse(localStorage.getItem("hospital"));
   const donor = JSON.parse(localStorage.getItem("donor"));
   const admin = JSON.parse(localStorage.getItem("admin"));

   const token =
      hospital?.accessToken ||
      donor?.accessToken ||
      admin?.accessToken;

   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }

   return config;
});

export const adminRequest = axios.create({
   baseURL: "https://blood-donation-and-bank-management-system.onrender.com/api/v1/admin",
});

adminRequest.interceptors.request.use((config) => {
   const admin = JSON.parse(localStorage.getItem("admin"));
   if (admin?.accessToken) {
      config.headers.Authorization = `Bearer ${admin.accessToken}`;
   }
   return config;
});