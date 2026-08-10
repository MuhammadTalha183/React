import React from 'react'
import Item from './Item'

function Packing() {
  return (
    <div className="w-full h-48 flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold">This is the packing component</h1>
      <Item name="Item 1" isPacked={true} />
      <Item name="Item 2" isPacked={false} />
      <Item name="Item 3" isPacked={true} />

    </div>
  )
}

export default Packing
