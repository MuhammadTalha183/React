import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Dashboard/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <Login/>
    <Register/>
    <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
