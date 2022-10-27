import React from 'react'
function FormMaker(props) {
 
  return (
    <form onSubmit={props.createElement}>
        <input type="text"
            onChange={props.handleChange}
            value={props.clearing} 
            placeholder="Enter name"/>
        <input type="submit" />
    </form>
  )
}

export default FormMaker