import React, { useState } from 'react' 
import Input from '../components/Input'; 
import Button from '../components/Button'; 
 
 
 
const Register = () => { 
 const [form, setForm] = useState({ 
    email: "", 
    password: "", 
    username:"", 
    age : "" 
  }); 
 
  const handleChange = (value, field) => { 
    console.log("mera function chalaa ->", value); 
 
    setForm((prev) => ({ ...prev, [field]: value })); 
  }; 
 
  const RegisterHandler = () => { 
    console.log("Register kerdia user ko...", form); 
    if (!form.email || !form.password || !form.username || !form.age) { 
      alert("Please fill all the fields"); 
      return; 
    }
    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Check if password is valid (at least 6 characters)
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
  }; 
 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
            <span className="text-2xl font-bold text-white">R</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Register your account to get started
          </p>
        </div>

        <div className="space-y-4">
          <Input 
            placeholder={"Enter your email address"} 
            handler={handleChange} 
            type={"email"} 
          /> 

          <Input 
            placeholder={"Enter your password"} 
            handler={handleChange} 
            type={"password"} 
          /> 

          <Input 
            placeholder={"Enter your age"} 
            handler={handleChange} 
            type={"age"} 
          /> 

          <Input 
            placeholder={"Enter your username"} 
            handler={handleChange} 
            type={"username"} 
          /> 
 
          <Button title={"Register"} handler={RegisterHandler} /> 
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Create your account and get started
        </p>

      </div>
    </div>
  ); 
} 
 
export default Register