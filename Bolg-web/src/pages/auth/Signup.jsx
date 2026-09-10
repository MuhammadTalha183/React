// import React, { useState } from 'react'
// import Input from '../../components/Input'
// import Button from '../../components/Button'
// import { createUserWithEmailAndPassword , signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// import { auth } from '../../firebase/config.js'
//   import { ToastContainer, toast } from "react-toastify";



// function Signup() {

//     let [form , setForm] = useState({
//         username : "",
//         email : "",
//         password : ""
//     })

//     function handleSubmit (name , value ) {
//         console.log(value,name )
//         setForm((prev)=> ({...prev , [name] : value}))

//     }

//      async function handleSignup () {
        
//         try {
//             let response = await createUserWithEmailAndPassword(auth, form.email, form.password)
//             console.log(response)
//               if (response.user) {
//         toast.success("user signup successfully!");
//       }
   
//         } catch (error) {
//             console.log(error.message ,error.code)
//               if (
//         error.message == "Firebase: Error (auth/email-already-in-use)" ||
//         error.code == "auth/email-already-in-use" || error.message == "Firebase: Error (auth/invalid-email)." 
//       ) {
//         toast.error("Email already Exist!");
//       }
//         }
//     }


//     const signupWithGoogleHandler = async () => {
//     console.log("signup chl raha haii..");

//     try {
//       const provider = new GoogleAuthProvider();
//       let response = await signInWithPopup(auth, provider);

//       console.log(response);

//       if (response.user) {
//         toast.success("user signup successfully!");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <div>
//                 <Input label="Username" type = "text" name = "username" value = {form.username} handler = {handleSubmit} />
//                 <Input label="Email" type = "email" name = "email" value = {form.email} handler = {handleSubmit} />
//                 <Input label="Password" type = "password" name = "password" value = {form.password} handler = {handleSubmit} />
//             </div>
//             <Button buttontext="Sign Up"  handler={handleSignup} />
//             <Button buttontext="Sign Up with Google"  handler={signupWithGoogleHandler} />
            

//                     <ToastContainer />


//         </div>
//     )
// }

// export default Signup



import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/config.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    let [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleSubmit(name, value) {
        console.log(value, name);
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSignup() {
        try {
            let response = await createUserWithEmailAndPassword(auth, form.email, form.password);
            console.log(response);
            if (response.user) {
                toast.success("user signup successfully!");
            }
        } catch (error) {
            console.log(error.message, error.code);
            if (
                error.message === "Firebase: Error (auth/email-already-in-use)" ||
                error.code === "auth/email-already-in-use" || 
                error.message === "Firebase: Error (auth/invalid-email)." 
            ) {
                toast.error("Email already Exist!");
            }
        }
    }

    const signupWithGoogleHandler = async () => {
        console.log("signup chl raha haii..");
        try {
            const provider = new GoogleAuthProvider();
            let response = await signInWithPopup(auth, provider);
            console.log(response);
            if (response.user) {
                toast.success("user signup successfully!");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
            <div className="w-full flex flex-col items-center justify-center  max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
                
                {/* Header */}
                <div className="text-center space-y-1.5">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Create your account
                    </h1>
                    <p className="text-sm text-slate-500">
                        Join us today to get started
                    </p>
                </div>

                {/* Input Fields Container */}
                <div className="space-y-4">
                    <Input 
                        label="Username" 
                        type="text" 
                        name="username" 
                        value={form.username} 
                        handler={handleSubmit} 
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    />
                    <Input 
                        label="Email" 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        handler={handleSubmit} 
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    />
                    <Input 
                        label="Password" 
                        type="password" 
                        name="password" 
                        value={form.password} 
                        handler={handleSubmit} 
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    />
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                    <Button 
                        buttontext="Sign Up"  
                        handler={handleSignup} 
                        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 rounded-lg shadow-sm transition duration-150 text-center"
                    />
                    
                    {/* Visual Divider */}
                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-slate-200"></div>
                        <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Or</span>
                        <div className="flex-grow border-t border-slate-200"></div>
                    </div>

                    <Button 
                        buttontext="Sign Up with Google"  
                        handler={signupWithGoogleHandler} 
                        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium py-2.5 rounded-lg border border-slate-300 shadow-sm transition duration-150"
                    />
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={4000} theme="light" />
        </div>
    );
}

export default Signup;
