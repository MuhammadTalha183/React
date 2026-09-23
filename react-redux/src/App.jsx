import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-600">
      <h1 className="text-2xl font-bold text-white">Welcome to TODO List</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
