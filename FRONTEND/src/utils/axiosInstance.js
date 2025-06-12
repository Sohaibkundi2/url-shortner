
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,// 15 seconds timeout
  withCredentials: true
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (add headers, auth tokens, etc.)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx
    return response;
  },
  (error) => {
    let errorMessage = "Something went wrong";
    
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      const status = error.response.status;
      const data = error.response.data;
      
      switch (status) {
        case 400:
          errorMessage = data.message || "Bad request";
          break;
        case 401:
          errorMessage = "Unauthorized - Please login again";
          // You could redirect to login page or refresh token here
          break;
        case 403:
          errorMessage = "Forbidden - You don't have permission";
          break;
        case 404:
          errorMessage = "Resource not found";
          break;
        case 422:
          errorMessage = data.message || "Validation failed";
          break;
        case 500:
          errorMessage = "Server error - Please try again later";
          break;
        default:
          errorMessage = data.message || `Error ${status}`;
      }
    } else if (error.request) {
      // The request was made but no response was received
      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timed out - Please try again";
      } else {
        errorMessage = "Network error - Please check your connection";
      }
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
    }
    
    // You can log errors to a monitoring service here
    console.error("API Error:", errorMessage, error);
    
    // Return a rejected promise with the error message
    return Promise.reject({
      originalError: error,
      message: errorMessage
    });
  }
);

export { axiosInstance };
