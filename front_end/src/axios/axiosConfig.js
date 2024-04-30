import axios from "axios";


const axiosObj=axios.create({
    baseURL:"http://localhost:8000",
    withXSRFToken:true,
    withCredentials:true,
   headers:{Authorization: `Bearer ${ window.localStorage.getItem("csrf-token")}`}
});
export default axiosObj;
