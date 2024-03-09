import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header({children}) {
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
    <li><Link className="dropdown-item" to={"/logout"}><i className="fa-solid fa-right-from-bracket me-1 text-cyan-800" ></i>logout</Link></li>
  </ul>
</div>
      </div>
    </nav>
    
  
  )
}
