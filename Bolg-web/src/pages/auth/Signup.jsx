

// import React, { useState } from 'react';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from '../../firebase/config.js';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Signup() {
//     let [form, setForm] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     function handleSubmit(name, value) {
//         console.log(value, name);
//         setForm((prev) => ({ ...prev, [name]: value }));
//     }

//     async function handleSignup() {
//         try {
//             let response = await createUserWithEmailAndPassword(auth, form.email, form.password);
//             console.log(response);
//             if (response.user) {
//                 toast.success("user signup successfully!");
//             }
//         } catch (error) {
//             console.log(error.message, error.code);
//             if (
//                 error.message === "Firebase: Error (auth/email-already-in-use)" ||
//                 error.code === "auth/email-already-in-use" 
               
//             ) {
//                 toast.error("Email already Exist!");
//             }else {
//                 toast.error(error.message);
//             }
//         }
//     }

//     const signupWithGoogleHandler = async () => {
//         console.log("signup chl raha haii..");
//         try {
//             const provider = new GoogleAuthProvider();
//             let response = await signInWithPopup(auth, provider);
//             console.log(response);
//             if (response.user) {
//                 toast.success("user signup successfully!");
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
//             <div className="w-full flex flex-col items-center justify-center  max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
                
//                 {/* Header */}
//                 <div className="text-center space-y-1.5">
//                     <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
//                         Create your account
//                     </h1>
//                     <p className="text-sm text-slate-500">
//                         Join us today to get started
//                     </p>
//                 </div>

//                 {/* Input Fields Container */}
//                 <div className="space-y-4">
//                     <Input 
//                         label="Username" 
//                         type="text" 
//                         name="username" 
//                         value={form.username} 
//                         handler={handleSubmit} 
//                         className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
//                     />
//                     <Input 
//                         label="Email" 
//                         type="email" 
//                         name="email" 
//                         value={form.email} 
//                         handler={handleSubmit} 
//                         className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
//                     />
//                     <Input 
//                         label="Password" 
//                         type="password" 
//                         name="password" 
//                         value={form.password} 
//                         handler={handleSubmit} 
//                         className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
//                     />
//                 </div>

//                 {/* Actions */}
//                 <div className="space-y-3 pt-2">
//                     <Button 
//                         buttontext="Sign Up"  
//                         handler={handleSignup} 
//                         className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 rounded-lg shadow-sm transition duration-150 text-center"
//                     />
                    
//                     {/* Visual Divider */}
//                     <div className="relative flex py-2 items-center">
//                         <div className="flex-grow border-t border-slate-200"></div>
//                         <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Or</span>
//                         <div className="flex-grow border-t border-slate-200"></div>
//                     </div>

//                     <Button 
//                         buttontext="Sign Up with Google"  
//                         handler={signupWithGoogleHandler} 
//                         className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium py-2.5 rounded-lg border border-slate-300 shadow-sm transition duration-150"
//                     />
//                 </div>
//             </div>

//             <ToastContainer position="top-right" autoClose={4000} theme="light" />
//         </div>
//     );
// }

// export default Signup;





















import React, { useState } from 'react';

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Stack
} from '@mui/material';

import {
    Visibility,
    VisibilityOff,
    ArrowForward,
    // AutoAwesome
} from '@mui/icons-material';
import AutoAwesome from '@mui/icons-material/AutoAwesome';


import { Link } from 'react-router-dom';

import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import { auth } from '../../firebase/config.js';

import {
    ToastContainer,
    toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function Signup() {

    let [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);


    function handleSubmit(name, value) {
        console.log(value, name);
        setForm((prev) => ({ ...prev, [name]: value }));
    }


    async function handleSignup() {

        try {

            let response =
                await createUserWithEmailAndPassword(
                    auth,
                    form.email,
                    form.password
                );

            console.log(response);

            if (response.user) {
                toast.success("user signup successfully!");
            }

        } catch (error) {

            console.log(
                error.message,
                error.code
            );

            if (
                error.message ===
                "Firebase: Error (auth/email-already-in-use)" ||
                error.code ===
                "auth/email-already-in-use"
            ) {

                toast.error("Email already Exist!");

            } else {

                toast.error(error.message);

            }
        }
    }


    const signupWithGoogleHandler = async () => {

        console.log("signup chl raha haii..");

        try {

            const provider =
                new GoogleAuthProvider();

            let response =
                await signInWithPopup(
                    auth,
                    provider
                );

            console.log(response);

            if (response.user) {
                toast.success(
                    "user signup successfully!"
                );
            }

        } catch (error) {

            toast.error(error.message);

        }
    };


    return (

        <Box
            sx={{
                minHeight: "100vh",
                background: `
                    radial-gradient(
                        circle at 10% 80%,
                        rgba(99,102,241,0.10),
                        transparent 30%
                    ),
                    radial-gradient(
                        circle at 90% 15%,
                        rgba(168,85,247,0.10),
                        transparent 30%
                    ),
                    #F8FAFC
                `,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 4 },
                overflow: "hidden"
            }}
        >

            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: "1120px",
                    minHeight: { xs: "auto", md: "680px" },
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "1px solid rgba(226,232,240,0.9)",
                    boxShadow:
                        "0 30px 80px rgba(15,23,42,0.08)",
                    display: "flex",
                    background: "#ffffff"
                }}
            >


                {/* LEFT SIDE */}

                <Box
                    sx={{
                        width: "48%",
                        display: { xs: "none", md: "flex" },
                        position: "relative",
                        overflow: "hidden",
                        p: 6,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: `
                            linear-gradient(
                                145deg,
                                #EEF2FF 0%,
                                #F5F3FF 48%,
                                #FAF5FF 100%
                            )
                        `
                    }}
                >

                    <Box
                        sx={{
                            position: "absolute",
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            background:
                                "rgba(99,102,241,0.11)",
                            top: -110,
                            left: -100
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            background:
                                "rgba(168,85,247,0.10)",
                            right: -70,
                            bottom: 30
                        }}
                    />


                    {/* Brand */}

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2
                        }}
                    >

                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.2}
                        >

                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        "linear-gradient(135deg,#6366F1,#8B5CF6)",
                                    color: "white",
                                    boxShadow:
                                        "0 10px 25px rgba(99,102,241,0.25)"
                                }}
                            >
                                <AutoAwesome fontSize="small" />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "21px",
                                    fontWeight: 800,
                                    color: "#1E293B"
                                }}
                            >
                                Talha
                                <span style={{
                                    color: "#6366F1"
                                }}>
                                    Dev
                                </span>
                            </Typography>

                        </Stack>

                    </Box>


                    {/* Hero */}

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "440px"
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: {
                                    md: "44px",
                                    lg: "50px"
                                },
                                lineHeight: 1.08,
                                fontWeight: 800,
                                letterSpacing: "-2px",
                                color: "#1E293B",
                                mb: 3
                            }}
                        >
                            Turn your
                            <br />
                            thoughts into
                            <br />

                            <Box
                                component="span"
                                sx={{
                                    background:
                                        "linear-gradient(90deg,#6366F1,#A855F7)",
                                    backgroundClip:
                                        "text",
                                    WebkitBackgroundClip:
                                        "text",
                                    WebkitTextFillColor:
                                        "transparent"
                                }}
                            >
                                stories.
                            </Box>

                        </Typography>


                        <Typography
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#64748B",
                                maxWidth: "390px"
                            }}
                        >
                            Create your account and start
                            sharing your knowledge, experiences
                            and ideas with the world.
                        </Typography>


                        <Stack
                            spacing={1.5}
                            sx={{ mt: 4 }}
                        >

                            {[
                                "Write and publish your blogs",
                                "Manage everything from your dashboard",
                                "Connect with a growing community"
                            ].map((item) => (

                                <Stack
                                    key={item}
                                    direction="row"
                                    alignItems="center"
                                    spacing={1.5}
                                >

                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background:
                                                "#6366F1"
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: "#475569"
                                        }}
                                    >
                                        {item}
                                    </Typography>

                                </Stack>

                            ))}

                        </Stack>

                    </Box>


                    <Typography
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            fontSize: "13px",
                            color: "#94A3B8"
                        }}
                    >
                        © 2026 TalhaDev. All rights reserved.
                    </Typography>

                </Box>


                {/* RIGHT SIDE */}

                <Box
                    sx={{
                        width: { xs: "100%", md: "52%" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 3, sm: 5, md: 7 }
                    }}
                >

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "430px"
                        }}
                    >


                        {/* Mobile Brand */}

                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                alignItems: "center",
                                gap: 1,
                                mb: 5
                            }}
                        >

                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "13px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        "linear-gradient(135deg,#6366F1,#8B5CF6)",
                                    color: "white"
                                }}
                            >
                                <AutoAwesome fontSize="small" />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 800,
                                    color: "#1E293B"
                                }}
                            >
                                Talha
                                <span style={{
                                    color: "#6366F1"
                                }}>
                                    Dev
                                </span>
                            </Typography>

                        </Box>


                        {/* Heading */}

                        <Box sx={{ mb: 4 }}>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "30px",
                                        sm: "34px"
                                    },
                                    fontWeight: 800,
                                    color: "#1E293B",
                                    letterSpacing: "-1px",
                                    mb: 1
                                }}
                            >
                                Create your account ✨
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#64748B",
                                    fontSize: "15px"
                                }}
                            >
                                Join us and start sharing your ideas.
                            </Typography>

                        </Box>


                        <Stack spacing={2.2}>


                            {/* Username */}

                            <TextField
                                fullWidth
                                label="Username"
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={(e) =>
                                    handleSubmit(
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "14px",
                                        background: "#F8FAFC"
                                    },
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#818CF8"
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#6366F1",
                                        borderWidth: "2px"
                                    },
                                    "& label.Mui-focused": {
                                        color: "#6366F1"
                                    }
                                }}
                            />


                            {/* Email */}

                            <TextField
                                fullWidth
                                label="Email address"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={(e) =>
                                    handleSubmit(
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "14px",
                                        background: "#F8FAFC"
                                    },
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#818CF8"
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#6366F1",
                                        borderWidth: "2px"
                                    },
                                    "& label.Mui-focused": {
                                        color: "#6366F1"
                                    }
                                }}
                            />


                            {/* Password */}

                            <TextField
                                fullWidth
                                label="Password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                value={form.password}
                                onChange={(e) =>
                                    handleSubmit(
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "14px",
                                        background: "#F8FAFC"
                                    },
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#818CF8"
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#6366F1",
                                        borderWidth: "2px"
                                    },
                                    "& label.Mui-focused": {
                                        color: "#6366F1"
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">

                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPassword
                                                    ?
                                                    <VisibilityOff />
                                                    :
                                                    <Visibility />
                                                }
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />


                            {/* Signup */}

                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleSignup}
                                endIcon={<ArrowForward />}
                                sx={{
                                    mt: 1,
                                    height: "54px",
                                    borderRadius: "14px",
                                    textTransform: "none",
                                    fontSize: "15px",
                                    fontWeight: 700,
                                    background:
                                        "linear-gradient(135deg,#6366F1,#7C3AED)",
                                    boxShadow:
                                        "0 12px 25px rgba(99,102,241,0.22)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg,#4F46E5,#6D28D9)",
                                        boxShadow:
                                            "0 15px 30px rgba(99,102,241,0.30)"
                                    }
                                }}
                            >
                                Create account
                            </Button>


                            <Divider
                                sx={{
                                    color: "#94A3B8",
                                    fontSize: "12px",
                                    "&::before, &::after": {
                                        borderColor: "#E2E8F0"
                                    }
                                }}
                            >
                                OR CONTINUE WITH
                            </Divider>


                            {/* Google */}

                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={
                                    signupWithGoogleHandler
                                }
                                sx={{
                                    height: "52px",
                                    borderRadius: "14px",
                                    textTransform: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#334155",
                                    borderColor: "#E2E8F0",
                                    background: "#FFFFFF",
                                    "&:hover": {
                                        borderColor: "#CBD5E1",
                                        background: "#F8FAFC"
                                    }
                                }}
                            >

                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: "18px",
                                        mr: 1.5,
                                        color: "#4285F4"
                                    }}
                                >
                                    G
                                </Box>

                                Continue with Google

                            </Button>

                        </Stack>


                        {/* Login */}

                        <Typography
                            align="center"
                            sx={{
                                mt: 4,
                                fontSize: "14px",
                                color: "#64748B"
                            }}
                        >
                            Already have an account?{" "}

                            <Box
                                component={Link}
                                to="/login"
                                sx={{
                                    color: "#6366F1",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration:
                                            "underline"
                                    }
                                }}
                            >
                                Login
                            </Box>

                        </Typography>

                    </Box>

                </Box>

            </Paper>


            <ToastContainer
                position="top-right"
                autoClose={4000}
                theme="light"
            />

        </Box>
    );
}

export default Signup;