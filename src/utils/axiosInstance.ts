import axios from "axios";
import Cookie from "./cookie";

const axiosInstance = axios.create({
    baseURL: "https://backend-apis-six.vercel.app",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${Cookie.get("jwt")}`
    },
});
export default axiosInstance;