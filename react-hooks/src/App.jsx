import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  let [count , setCount] = useState(0)
  let [inputValue , setInputValue] = useState('')

  function increase (){
    setCount(count + 1)
  }
  function decrease (){
    setCount(count - 1 )
    
  }

  function handleChange (e){
    setInputValue(e.target.value)
  }
  function handleSubmit (){
    const number = Number(inputValue)
    if (!isNaN(number)) {
      setCount(number)
      setInputValue('')
    }
  }
  return (
    <div>
      <input 
      type="text"
       value={inputValue} 
       onChange={handleChange} 
       placeholder='Enter a Number '
        />
        <button onClick={handleSubmit}>submit</button>
      <button onClick={increase}>[+]</button>
      <button>{count}</button>
      <button onClick={decrease}>[-]</button>
      <button onClick={(()=>{setCount(0)})}>Reset</button>
    </div>
  )
}

export default App
