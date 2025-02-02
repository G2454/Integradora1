import axios from 'axios'


const api = axios.create({
    baseURL: "http://192.168.1.102:3000/",
    timeout: 10000, // Increased timeout to 10 seconds
    timeoutErrorMessage: "A conexão demorou muito para responder",
  });
  
  // Add request interceptor for debugging
  api.interceptors.request.use(
    (config) => {
      console.log("Making request to:", config.url);
      return config;
    },
    (error) => {
      console.log("Request error:", error);
      return Promise.reject(error);
    }
  );
  
  export default api;