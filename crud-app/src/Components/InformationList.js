import React, { useState } from 'react'

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
   return <div >
      <input type="text" defaultValue={props.names}/>
      <input type="button" value="Edit" onClick={handleToggle}/>
      <input type="button" value="Delete"onClick={props.handleDelete}/>
    </div>
  }
  const editData=()=>{
    return <form onSubmit={submission}>
       <input type="text" onChange={geter}/>
       <input type="submit"  />
     </form>
   }

  return (
    !toggle ? showData():editData()
  )
}

export default InformationList