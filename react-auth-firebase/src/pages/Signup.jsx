


import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// FIX 1: Import app (default) and db (named export) correctly based on how you exported them
import app, { db } from '../firebase/config.js'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");
  const navigate = useNavigate();
  const notify = (message) => toast(message);

  async function signupHandler() {
    const auth = getAuth(app);

    try {
      // 1. Authenticate & create the user first
      let userCredential = await createUserWithEmailAndPassword(auth, email, password);
      let user = userCredential.user;

      if (user) {
        // FIX 2: Move Firestore code INSIDE the successful "if (user)" block
        const docRef = await addDoc(collection(db, "Users"), {
          uid: user.uid, // Good practice: link the Firestore doc to the Auth UID
          username: username,
          email: email,
          age: age
        });
        console.log("Document written with ID: ", docRef.id);

        notify("User Created Successfully");
        
        // Redirect after everything succeeds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      const errorMessage = error.message;
      notify(errorMessage);
      console.error("Signup Error:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <ToastContainer />
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl text-white shadow-lg shadow-indigo-500/30">
              ✦
            </div>
            <h1 className="text-3xl font-bold text-white"> Create Account </h1>
            <p className="mt-2 text-sm text-slate-400"> Create your account to get started </p>
          </div>

          <div className="space-y-5">
            {/* User Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300"> User Name </label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400"> 👤 </span>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Enter your User Name" className="h-13 w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300"> Email Address </label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400"> ✉ </span>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Enter your email" className="h-13 w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300"> Age </label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400"> 🎂 </span>
                <input onChange={(e) => setAge(e.target.value)} value={age} type="text" placeholder="Enter your age" className="h-13 w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300"> Password </label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400"> 🔒 </span>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" className="h-13 w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
              </div>
            </div>

            <button onClick={signupHandler} className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0" >
              Create Account <span className="text-xl transition-transform group-hover:translate-x-1"> → </span>
            </button>
          </div>

          <div className="mt-7 text-center">
            <p className="text-sm text-slate-400"> Already have an account? 
              <button onClick={() => navigate('/login')} className="ml-1 font-semibold text-indigo-400 transition hover:text-indigo-300" > Login </button>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-600"> Your information is securely protected </p>
      </div>
    </div>
  )
}

export default Signup;
