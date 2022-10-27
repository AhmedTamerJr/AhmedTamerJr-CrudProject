import { useState } from 'react';
import './App.css';
import InformationList from './Components/InformationList';
import FormMaker from './Components/FormMaker'

function App() {

   
  const [name,setName]=useState([
    {name:"done"},{name:"yaha"},{name:"timo"},{name:"ahmed"}
  ])
  const [add,setAdd]=useState("")
  


  const handleChange=(e)=>{ setAdd(e.target.value)} 

  const createElement=(e)=>{   
    e.preventDefault();
    setName(oldValue=>[...oldValue,{name:add}])
    setAdd("")
    
    
  } 
  const handleDelete=(id)=>{
    name.splice(id,1)
    
    setName([...name])  
    
  }

const editData=(id,val)=>{
  name.splice(id,1,{name:val})
  setName([...name])
}
  
  let dataView=()=> name.map((info,index)=>

    <InformationList 
      names={info.name} 
      key={Math.random() } 
      handleDelete={handleDelete} 
      editData={editData}
      
      id={index}/>

      )

  
  return (
    <div className="App">

      <FormMaker handleChange={handleChange} 
        createElement={createElement} 
        clearing={add}/>

      {dataView()}
    </div>
  );

  }
export default App;
