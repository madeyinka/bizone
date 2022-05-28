import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_DEV_API
})

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_DEV_API,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})