import React from 'react'
import"./FormMaker.css"
function FormMaker(props) {

  return (
    <form className='Form' onSubmit={props.createElement}>
        <input type="text"
            onChange={props.handleChange}
            value={props.clearing} 
            placeholder="Enter name"/>
        <input type="submit" className='Submit'/>
    </form>
  )
}

export default FormMaker