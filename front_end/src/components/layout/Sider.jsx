import {  NavLink } from 'react-router-dom'
import "../style/sideBar.css"
export default function Sider() {
  return (

   /* <div>
      <aside>
  <p>  </p>
  <Link to={"/"}><i className="fa-solid fa-house"></i> Home</Link>

 
  <Link to={""} >Services</Link>
  <Link to={""}>Contact </Link>
</aside>


    </div>*/
    <nav className='nav'>
    <ul className='list-unstyled '>
      <li><a href="#" className="logo">
       
      </a></li><li>
      <NavLink to={"/index"} activeclassname='active' className={"a"}><div className='d-flex align-items-center '>
      <i className="fas fa-solid fa-house"></i><span className='nav-i'>Home</span>
        </div> </NavLink></li>
      <li> 
      <NavLink to={"/createCamp"} activeclassname='active' className={"a"}><div className='d-flex align-items-center '><i className="fas fa-solid fa-circle-plus"></i><span className='nav-i'> Creer campagn</span></div> </NavLink></li>
      <li> 
      <NavLink to={"/allCamps"} activeclassname='active' className={"a"}><div className='d-flex align-items-center '><i className="fas fa-solid fa-clipboard-list"></i><span className='nav-i'> les Campaigns</span></div> </NavLink></li>
      <li> 
      <NavLink to={"/statics"} activeclassame='active' className={"a"}><div className='d-flex align-items-center '><i className="fas fa-duotone fa-chart-simple"></i><span className='nav-i'> les Campaigns</span></div> </NavLink></li>
    
    </ul>
  </nav>
 
  )
}
