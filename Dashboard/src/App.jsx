import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Dashboard/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <Login/> */}
    {/* <Register/> */}
    <Home/>
   </div>
  )
}

export default App
