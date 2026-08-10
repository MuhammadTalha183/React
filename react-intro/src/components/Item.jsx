import React from 'react'

function Item({name , isPacked}) {
    if(isPacked){
  return <li className='line-through text-gray-500'>{name}  ✅</li>
    }
    return <li className='text-red-500'>{name}  ❌</li>
}

export default Item
