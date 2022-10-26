import React from 'react'

function InformationList(props) {
  return (
    <div>{props.names}
    <input type="button" value="Delete Me" onClick={()=>props.handleDelete(props.id)}/>
    </div>
  )
}

export default InformationList