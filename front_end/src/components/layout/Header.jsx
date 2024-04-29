import { Link, useNavigate } from 'react-router-dom'
import axiosObj from '../../axios/axiosConfig';

export default function Header({children}) {
  const navigate=useNavigate()
  const logout = async (e)=>{
    e.preventDefault()
   
    const accessToken = window.localStorage.getItem('csrf-token');

 const resp = await axiosObj.post("/api/logout", null, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
if(resp.status===200){
  window.localStorage.removeItem("csrf-tooken")
  window.sessionStorage.removeItem("user")
  navigate("/")
}
  }
  return (
  
       <nav className='row bg-red-600 container-fluid mx-auto justify-between align-items-center p-1'>
      <div className='col-2'>
        <img src="./images/logo2.jpg" alt="404" className='w-20 h-20  rounded-full'/>
      </div>
      <div className='col-1 '>
      <div className="dropdown  d-inline-block w-75 ms-4 ">
  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="./images/profile.png" alt="404" className='w-10 h-10  rounded-full'/>
  </button>
  <ul className="dropdown-menu dropdown-menu-danger">
    <li><Link to={"/settings"} className="dropdown-item" ><i className="fa-solid fa-gear me-1  text-cyan-800"></i>settings</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><button className="dropdown-item" onClick={logout}><i className="fa-solid fa-right-from-bracket me-1 text-cyan-800" ></i>logout</button></li>
  </ul>
</div>
      </div>
    </nav>
    
  
  )
}
