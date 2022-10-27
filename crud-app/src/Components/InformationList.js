import React, { useState } from 'react'
import "./InformationList.css"
import {BsFillTrash2Fill} from"react-icons/bs"
import{AiTwotoneEdit} from "react-icons/ai"
function InformationList(props) {

  const [toggle,setToggle]=useState(false)

  const handleToggle=()=>{
    setToggle(!toggle)
  }
  const[value,setValue]=useState("")

const geter=(e)=>{
  setValue(e.target.value)
  console.log(value)
  
}

const submission=(e)=>{
  e.preventDefault()
  props.editData(props.index,value)
  handleToggle()
}
  const showData=()=>{
   return <div className='Show'>
      <input className='type' type="text" defaultValue={props.names}/>
      <button className='btn Edit' onClick={handleToggle}><AiTwotoneEdit/></button>
      <button className='btn Delete'  onClick={props.handleDelete}><BsFillTrash2Fill/></button>
    </div>
  }
  const editData=()=>{
    return <form className='Form' onSubmit={submission}>
       <input type="text" onChange={geter}/>
       <input type="submit" className='Submit' />
     </form>
   }

  return (
    !toggle ? showData():editData()
  )
}

export default InformationList