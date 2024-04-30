import React, { useState } from 'react'
import "../style/loaders.css"
import axiosObj from '@/axios/axiosConfig'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
export default function Campaign() {
    const [inputVals,setInputVals]=useState({
        title:"",
        date:""
    })
    const [errs,setErrs]=useState({
      title:false,
      date:false
  })
    const [isSub,setIsSub]=useState(false)
   async function handelClick(){
     /*   setIsSub(true)
        let errs={};
        let counter=0;
        for(let key in inputVals){
          if(!inputVals[key]){
            console.log(key);
            errs={...errs,[key]:true}
            counter+=1;
          setIsSub(false)

          }else{
            errs={...errs,[key]:false}
          }
        }
        if(!counter){
          setErrs({
            title:false,
            date:false,
          })
        await axiosObj.get("/sanctum/csrf-cookie")
        await  axiosObj.post("/campaign",inputVals).then((data)=>console.log(data.status))*/
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });/*
        }
        setErrs(errs)*/
    }
    function handleChange(e){
            setInputVals({...inputVals,[e.target.name]:e.target.value})
    }
  return (
    <div className='parent p-5'>
        <div className='p-2 w-75 bg-white rounded rounded-4 shadow'>
        <h2 className='d-block text-center  '>Create new Campaign</h2>

        <form>

  <div className="mb-3 w-75 mx-auto">
    <label className="form-label  font-bold">Compaign titre :</label>
    <input type="text" name='title' className="form-control  inputsBorder" onChange={handleChange} />
    {errs.title && <div  className="form-text text-danger">se champ est obligatoire</div>}
  </div>
  <div className="mb-3 w-75 mx-auto">
    <label className="form-label  font-bold">Compaign lieu :</label>
    <input type="text" name='title' className="form-control  inputsBorder" onChange={handleChange} />
    {errs.title && <div  className="form-text text-danger">se champ est obligatoire</div>}
  </div>
  <div className="mb-3 w-75 mx-auto">
    <label  className="form-label font-bold">Date :</label>
    <input type="date" name='date' className="form-control  inputsBorder" onChange={handleChange} />
    {errs.date && <div  className="form-text text-danger">se champ est obligatoire</div>}

  </div>
  <div className='d-flex justify-content-center '>
  <button type="button" disabled={isSub?true:false} onClick={handelClick} className="btn btn-danger font-bold text-center w-25">{isSub?<p className='loader d-d-inline-block  mx-auto'></p>:"Creer"}</button>

  </div>
</form>

        </div>
        <ToastContainer />
    </div>
  )
}
