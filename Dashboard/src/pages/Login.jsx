import React from 'react'
import { useState } from 'react'
import Input from '../components/input'
function Login() {

    let [form , setForm] = useState({
        email : "",
        password : ""
    })
    

   function handleChange (e) {
    setForm({...form, email : e.target.value})
   } 
   console.log(form)

  return (
    <div>
      <Input placeholder={'email'}  onChange={handleChange}   />
      <Input placeholder={'password'}  />
    </div>
  )
}

export default Login
