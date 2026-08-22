import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
    <div className='flex  w-60 shadow-lg rounded-lg overflow-hidden '>

    <input type="text" name="" id="" 
    className='w-[80%] h-5 p-3 outline-1 outline-blue-600 '/>
    <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ADD</button>
    </div>


   </div>
  )
}

export default App
