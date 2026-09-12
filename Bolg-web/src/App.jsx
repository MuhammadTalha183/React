
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './components/Home'
function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
