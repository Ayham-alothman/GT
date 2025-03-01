

import axios from 'axios';
import Cookies from 'js-cookie';
const APIServerData = axios.create({
  baseURL: 'http://localhost:4001/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include credentials (cookies)
});

APIServerData.interceptors.request.use(
  (config) => { 
    
    const token=Cookies.get(`token`);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default APIServerData;