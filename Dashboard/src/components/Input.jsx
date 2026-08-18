import React from 'react'

function Input({placeholder, onChange}) {
  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={(e)=>{e.target.value}} />
    </div>
  )
}

export default Input
