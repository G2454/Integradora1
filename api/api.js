import axios from 'axios'


const api = axios.create({
    baseURL: "", //colocar o IPV4 ou o IP do backend
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