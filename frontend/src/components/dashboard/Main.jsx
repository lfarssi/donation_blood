import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!window.sessionStorage.getItem("user")){
           navigate("/")
    }
  })
  return (
    <div className='cntr'>
     <Link className="navCards text-decoration-none" to={"/createCamp"}>
        <img src="images/blood-donation.png"  className='flex-1' width={130} height={130} alt="" />
        <h2 className='flex-auto  w-50 font-serif '>
        Créer une nouvelle campagne
        </h2>
      </Link>
      <Link className="navCards text-decoration-none " to={"/listeCamp"}>
        <img src="images/to-do-list.png"  className='flex-1' width={130} height={130} alt="" />
        <h2 className='flex-auto  w-50 font-serif '>
        la liste de toutes les campagnes
        </h2>
      </Link>
      <Link className="navCards text-decoration-none " to={"/createCamp"}>
        <img src="images/sketchbook.png"  className='flex-1' width={130} height={130} alt="" />
        <h2 className='flex-auto  w-50 font-serif  '>
        Créer une nouvelle campagne
        </h2>
      </Link>
    </div>
  )
}
