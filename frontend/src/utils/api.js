// import axios from "axios";
// const local_api = "http://localhost:5000";
// const production_api = "";

// const token = localStorage.getItem("canva_token");

// const api = axios.create({
//   baseURL: local_api,
//   headers: {
//     Authorization: token ? `Bearar ${token}` : "",
//   },
//   withCredentials: true,
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: localStorage.getItem("canva_token")
      ? `Bearer ${localStorage.getItem("canva_token")}`
      : "",
  },
  withCredentials: true,
});

export default api;
