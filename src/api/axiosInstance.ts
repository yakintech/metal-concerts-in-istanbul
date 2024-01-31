import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://northwind.vercel.app/api/",
    headers: {
        'Content-Type': 'application/json',
    },
});
