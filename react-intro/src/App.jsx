import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Packing from './components/Packing'
import AddItem from './components/AddItem'

function App() {
  return (
    <div>
      <Navbar/>
      <Cards/>
      <Packing/>
      <AddItem/>
      <Footer/>
    </div>
  )
}

export default App
