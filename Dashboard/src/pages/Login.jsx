// import React, { useState } from 'react'
// import Input from '../components/Input';
// import Button from '../components/Button';

// const Login = () => {
//  const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (value, field) => {
//       setForm((prev) => ({ ...prev, [field]: value }));
    
//   };

//   const loginHandler = () => {
//     console.log("login kerdia user ko...", form);
//     //  if value is empty then return
//     if (!form.email || !form.password) {
//       alert("Please fill all the fields");
//       return;
//     }
//     // Check if email is valid
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(form.email)) {
//       alert("Please enter a valid email address");
//       return;
//     }
//     // Check if password is valid (at least 6 characters)
//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters long");
//       return;
//     }
//   };

//   return (
//     <div className="shadow-md p-3 rounded-2xl w-[500px] ">
//       <Input
//         placeholder={"Enter your email address"}
//         handler={handleChange}
//         type={"email"}
//       />
//       <Input
//         placeholder={"Enter your password"}
//         handler={handleChange}
//         type={"password"}
//       />

//       <Button title={"login"} handler={loginHandler} />
//     </div>
//   );
// }

// export default Login





import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
 const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, field) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    
  };

  const loginHandler = () => {
    console.log("login kerdia user ko...", form);
    //  if value is empty then return
    if (!form.email || !form.password) {
      alert("Please fill all the fields");
      return;
    }
    // Check if email is valid
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
            <span className="text-2xl font-bold text-white">L</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to your account to continue
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

          <Button title={"login"} handler={loginHandler} />
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Secure login • Welcome back
        </p>

      </div>
    </div>
  );
}

export default Login