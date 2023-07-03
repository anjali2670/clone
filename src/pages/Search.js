import React, { useState } from 'react'
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
// import {useHistory} from "react-router";
import { StateContext } from '../StateProvider';
import { useContext } from 'react';
import  { useNavigate } from "react-router-dom"
import { actionTypes } from '../Reducer';

export default function Search() {

const [State,dispatch] = useContext(StateContext)
const[input,setInput]=useState("");
const history=useNavigate();

//today
const search=(e)=>{
    
  // history.push("/search");
  // e.preventDefault();
  // dispatch({
  //   type:actionTypes.SET_SEARCH_TERM,
  //   term:input
  // })
}


const HandleSubmit=(e)=>{
  e.preventDefault();
  const newState = {
   type:"SET_SEARCH_TERM",
   term: input
  }
  dispatch(newState)
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