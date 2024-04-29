import axios from "axios";


const axiosObj=axios.create({
    baseURL:"http://127.0.0.1:8000",
    withXSRFToken:true,
    withCredentials:true,
   headers:{Authorization: `Bearer ${ window.localStorage.getItem("csrf-token")}`}
});
export default axiosObj;
