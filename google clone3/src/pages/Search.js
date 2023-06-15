import React, { useState } from 'react'
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
// import {useHistory} from "react-router";
import  { useNavigate } from "react-router-dom"
export default function Search() {

const[input,setInput]=useState("");
const history=useNavigate();
const search=(e)=>{
  e.preventDefault();
  // history.push("/search");
}
const HandleSubmit=()=>{
  history("/search");
}

  return (

    <form className='search'onSubmit={HandleSubmit}>
   <div className='search__input'>
   <SearchIcon className='searchicon'/>
   <input  type="text" placeholder="Search Google and type a URL" 
   value={input} onChange={e=>setInput(e.target.value)} />
 <MicNoneIcon/>
   </div>  </form>
      
    
  )
}
