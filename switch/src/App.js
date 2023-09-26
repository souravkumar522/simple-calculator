import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data,setdata]=useState("")
 
  return (
    
    <div className='calculator'>
      
      <input type="text" placeholder='0' value={data}/>
      <button className='button cancle' onClick={()=>setdata("")}>C</button>
      
      <button className='button' onClick={()=>setdata((data)+"+")}>+</button>
      <button className='button' onClick={()=>setdata((data)+"/")}>/</button>
      <button className='button' onClick={()=>setdata((data)+"*")}>*</button>
      <button className='button' onClick={()=>setdata((data)+"9")}>9</button>
      <button className='button' onClick={()=>setdata((data)+"8")}>8</button>
      <button className='button' onClick={()=>setdata((data)+"7")}>7</button>
      <button className='button' onClick={()=>setdata((data)+"-")}>-</button>
      <button className='button' onClick={()=>setdata((data)+"6")}>6</button>
      <button className='button' onClick={()=>setdata((data)+"5")}>5</button>
      <button className='button' onClick={()=>setdata((data)+"4")}>4</button>
      <button className='button' onClick={()=>setdata((data)+"3")}>3</button>
      <button className='button' onClick={()=>setdata((data)+"2")}>2</button>
      <button className='button' onClick={()=>setdata((data)+"1")}>1</button>
      <button className='button' onClick={()=>setdata((data)+"0")}>0</button>
      <button className='button equal' onClick={()=>setdata (eval(data))}>=</button>
       
  
      
    </div>
  )
}

export default App
