import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (

    <BrowserRouter>
      <Routes>
    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
</Routes>
    </BrowserRouter>

  )
}

export default App
