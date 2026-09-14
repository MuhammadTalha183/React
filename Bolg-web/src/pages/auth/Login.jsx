

// // import React, { useState } from 'react';
// // import Input from '../../components/Input';
// // import Button from '../../components/Button';
// // import {  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, } from "firebase/auth";
// // import { auth } from '../../firebase/config.js';
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // function Login() {
// //     let [form, setForm] = useState({
// //         email: "",
// //         password: ""
// //     });

// //     function handleSubmit(name, value) {
// //         console.log(value, name);
// //         setForm((prev) => ({ ...prev, [name]: value }));
// //     }

// //     async function handleLogin() {
// //         try {
// //             let response = await signInWithEmailAndPassword(auth, form.email, form.password);

// //             console.log(response);
// //             if (response.user) {
// //                 toast.success("user login successfully!");
// //             }
// //         } catch (error) {
// //           toast(error.message)            
// //         }
// //     }

// //     const signInWithGoogleHandler = async () => {
// //         console.log("signup chl raha haii..");
// //         try {
// //             const provider = new GoogleAuthProvider();
// //             let response = await signInWithPopup(auth, provider)

// //             console.log(response);
// //             if (response.user) {
// //                 toast.success("user signup successfully!");
// //             }
// //         } catch (error) {
// //             toast.error(error.message);
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
// //             <div className="w-full flex flex-col items-center justify-center  max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
                
// //                 {/* Header */}
// //                 <div className="text-center space-y-1.5">
// //                     <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
// //                         Already have Account
// //                     </h1>
// //                     <p className="text-sm text-slate-500">
// //                         Welcome back! Please login to your account.
// //                     </p>
// //                 </div>

// //                 {/* Input Fields Container */}
// //                 <div className="space-y-4">
                   
// //                     <Input 
// //                         label="Email" 
// //                         type="email" 
// //                         name="email" 
// //                         value={form.email} 
// //                         handler={handleSubmit} 
// //                         className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
// //                     />
// //                     <Input 
// //                         label="Password" 
// //                         type="password" 
// //                         name="password" 
// //                         value={form.password} 
// //                         handler={handleSubmit} 
// //                         className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
// //                     />
// //                 </div>

// //                 {/* Actions */}
// //                 <div className="space-y-3 pt-2">
// //                     <Button 
// //                         buttontext="Login"  
// //                         handler={handleLogin} 
// //                         className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 rounded-lg shadow-sm transition duration-150 text-center"
// //                     />
                    
// //                     {/* Visual Divider */}
// //                     <div className="relative flex py-2 items-center">
// //                         <div className="flex-grow border-t border-slate-200"></div>
// //                         <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">Or</span>
// //                         <div className="flex-grow border-t border-slate-200"></div>
// //                     </div>

// //                     <Button 
// //                         buttontext="Sign Up with Google"  
// //                         handler={signInWithGoogleHandler} 
// //                         className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium py-2.5 rounded-lg border border-slate-300 shadow-sm transition duration-150"
// //                     />
// //                 </div>
// //             </div>

// //             <ToastContainer position="top-right" autoClose={4000} theme="light" />
// //         </div>
// //     );
// // }

// // export default Login;









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
} from '@mui/icons-material';
import AutoAwesome from '@mui/icons-material/AutoAwesome';

import { Link, useNavigate } from 'react-router-dom';

import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from '../../firebase/config.js';

import {
    ToastContainer,
    toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function Login() {

    let [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    function handleSubmit(name, value) {
        console.log(value, name);
        setForm((prev) => ({ ...prev, [name]: value }));
    }


    async function handleLogin() {
        try {
            let response = await signInWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            console.log(response);

            if (response.user) {
                toast.success("user login successfully!");
            }
            setTimeout(() => {
                navigate("/dashboard");
            }, 5000);
        } catch (error) {
            toast.error(error.message);
        }
    }


    const loginWithGoogleHandler = async () => {

        console.log("login with google..");

        try {

            const provider = new GoogleAuthProvider();

            let response = await signInWithPopup(
                auth,
                provider
            );

            console.log(response);

            if (response.user) {
                toast.success("user login successfully!");
            }

            setTimeout(() => {
                navigate("/");
            }, 5000);

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
                        rgba(99,102,241,0.12),
                        transparent 40%
                    ),
                    radial-gradient(
                        circle at 90% 15%,
                        rgba(168,85,247,0.12),
                        transparent 40%
                    ),
                    #F8FAFC
                `,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, sm: 3, md: 4 },
                overflow: "hidden"
            }}
        >

            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: "1120px",
                    minHeight: { xs: "auto", md: "640px" },
                    borderRadius: "28px",
                    overflow: "hidden",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    boxShadow: "0 25px 70px -12px rgba(15, 23, 42, 0.08)",
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
                                #F5F3FF 50%,
                                #FAF5FF 100%
                            )
                        `
                    }}
                >

                    <Box
                        sx={{
                            position: "absolute",
                            width: 340,
                            height: 340,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                            top: -120,
                            left: -110,
                            filter: "blur(20px)"
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            width: 260,
                            height: 260,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
                            right: -80,
                            bottom: 20,
                            filter: "blur(20px)"
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
                            spacing={1.5}
                        >

                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                                    color: "white",
                                    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.28)"
                                }}
                            >
                                <AutoAwesome fontSize="small" />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "22px",
                                    fontWeight: 800,
                                    color: "#0F172A",
                                    letterSpacing: "-0.5px"
                                }}
                            >
                                Talha
                                <span style={{ color: "#6366F1" }}>
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
                                    md: "42px",
                                    lg: "48px"
                                },
                                lineHeight: 1.12,
                                fontWeight: 800,
                                letterSpacing: "-1.5px",
                                color: "#0F172A",
                                mb: 2.5
                            }}
                        >
                            Welcome
                            <br />
                            back to your
                            <br />

                            <Box
                                component="span"
                                sx={{
                                    background: "linear-gradient(90deg, #6366F1, #A855F7)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                workspace.
                            </Box>

                        </Typography>


                        <Typography
                            sx={{
                                fontSize: "15px",
                                lineHeight: 1.7,
                                color: "#64748B",
                                maxWidth: "390px"
                            }}
                        >
                            Sign in to access your dashboard, draft new posts, and stay updated with your community.
                        </Typography>

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
                        p: { xs: 3, sm: 5, md: 6 }
                    }}
                >

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "400px"
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
                                gap: 1.5,
                                mb: 4
                            }}
                        >

                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                                    color: "white"
                                }}
                            >
                                <AutoAwesome fontSize="small" />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 800,
                                    color: "#0F172A"
                                }}
                            >
                                Talha
                                <span style={{ color: "#6366F1" }}>
                                    Dev
                                </span>
                            </Typography>

                        </Box>


                        {/* Heading */}

                        <Box sx={{ mb: 3.5 }}>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "26px",
                                        sm: "30px"
                                    },
                                    fontWeight: 800,
                                    color: "#0F172A",
                                    letterSpacing: "-0.8px",
                                    mb: 0.8
                                }}
                            >
                                Welcome back 👋
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#64748B",
                                    fontSize: "14px"
                                }}
                            >
                                Enter your credentials to access your account.
                            </Typography>

                        </Box>


                        <Stack spacing={2}>


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
                                        borderRadius: "12px",
                                        background: "#F8FAFC",
                                        transition: "all 0.2s ease-in-out"
                                    },
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#A5B4FC"
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
                                        borderRadius: "12px",
                                        background: "#F8FAFC",
                                        transition: "all 0.2s ease-in-out"
                                    },
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#A5B4FC"
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
                                                    <VisibilityOff fontSize="small" />
                                                    :
                                                    <Visibility fontSize="small" />
                                                }
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />


                            {/* Login */}

                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleLogin}
                                endIcon={<ArrowForward />}
                                sx={{
                                    mt: 1,
                                    height: "50px",
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    fontSize: "15px",
                                    fontWeight: 700,
                                    background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                                    boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.4)",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)",
                                        boxShadow: "0 12px 24px -4px rgba(99, 102, 241, 0.5)",
                                        transform: "translateY(-1px)"
                                    }
                                }}
                            >
                                Login
                            </Button>


                            <Divider
                                sx={{
                                    my: 1,
                                    color: "#94A3B8",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.5px",
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
                                    loginWithGoogleHandler
                                }
                                sx={{
                                    height: "48px",
                                    borderRadius: "12px",
                                    textTransform: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#334155",
                                    borderColor: "#E2E8F0",
                                    background: "#FFFFFF",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        borderColor: "#CBD5E1",
                                        background: "#F8FAFC",
                                        transform: "translateY(-1px)"
                                    }
                                }}
                            >

                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: "17px",
                                        mr: 1.5,
                                        color: "#4285F4"
                                    }}
                                >
                                    G
                                </Box>

                                Continue with Google

                            </Button>

                        </Stack>


                        {/* Register Link */}

                        <Typography
                            align="center"
                            sx={{
                                mt: 3.5,
                                fontSize: "14px",
                                color: "#64748B"
                            }}
                        >
                            Don't have an account?{" "}

                            <Box
                                component={Link}
                                to="/signup"
                                sx={{
                                    color: "#6366F1",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration: "underline"
                                    }
                                }}
                            >
                                Sign up
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

export default Login;