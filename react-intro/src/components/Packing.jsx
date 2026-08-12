import React from 'react'
import Item from './Item'
import {useState} from 'react'

function Packing() {

  const [isPacked, setIsPacked] = useState(false)

  function changeStatus() {
    if (isPacked) {
      setIsPacked(false)
    } else {
      setIsPacked(true)
    }
  }
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold">This is the packing component</h1>
      <Item name="Item 1" isPacked={isPacked}  /> <button className='w-48 h-14 border-2 text-2xl text-white border-gray-300 rounded-xl bg-amber-800 mb-10 p-10' onClick={changeStatus}>Toggle</button>
      <Item name="Item 2" isPacked={isPacked} /> <button className='w-48 h-14 border-2 text-2xl text-white border-gray-300 rounded-xl bg-amber-800 mb-10 p-10' onClick={changeStatus}>Toggle</button>
      <Item name="Item 3" isPacked={isPacked} /> <button className='w-48 h-14 border-2 text-2xl text-white border-gray-300 rounded-xl bg-amber-800 mb-10 p-10' onClick={changeStatus}>Toggle</button>

      

    </div>
  )
}

export default Packing
