

// import React, { useState } from 'react';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import {  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, } from "firebase/auth";
// import { auth } from '../../firebase/config.js';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//     let [form, setForm] = useState({
//         email: "",
//         password: ""
//     });

//     function handleSubmit(name, value) {
//         console.log(value, name);
//         setForm((prev) => ({ ...prev, [name]: value }));
//     }

//     async function handleLogin() {
//         try {
//             let response = await signInWithEmailAndPassword(auth, form.email, form.password);

//             console.log(response);
//             if (response.user) {
//                 toast.success("user login successfully!");
//             }
//         } catch (error) {
//           toast(error.message)            
//         }
//     }

//     const signInWithGoogleHandler = async () => {
//         console.log("signup chl raha haii..");
//         try {
//             const provider = new GoogleAuthProvider();
//             let response = await signInWithPopup(auth, provider)

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
//                         Already have Account
//                     </h1>
//                     <p className="text-sm text-slate-500">
//                         Welcome back! Please login to your account.
//                     </p>
//                 </div>

//                 {/* Input Fields Container */}
//                 <div className="space-y-4">
                   
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
//                         buttontext="Login"  
//                         handler={handleLogin} 
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
//                         handler={signInWithGoogleHandler} 
//                         className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium py-2.5 rounded-lg border border-slate-300 shadow-sm transition duration-150"
//                     />
//                 </div>
//             </div>

//             <ToastContainer position="top-right" autoClose={4000} theme="light" />
//         </div>
//     );
// }

// export default Login;






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

import { Link } from 'react-router-dom';

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
import {useNavigate} from 'react-router-dom';
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
                navigate("/");
            }, 5000);
        } catch (error) {
            toast.error(error.message);
        }
    }


    const signInWithGoogleHandler = async () => {

        console.log("signup chl raha haii..");

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
                        circle at 10% 20%,
                        rgba(99,102,241,0.10),
                        transparent 30%
                    ),
                    radial-gradient(
                        circle at 90% 80%,
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

            {/* Main Container */}

            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: "1120px",
                    minHeight: { xs: "auto", md: "680px" },
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "1px solid rgba(226,232,240,0.9)",
                    boxShadow: "0 30px 80px rgba(15,23,42,0.08)",
                    display: "flex",
                    position: "relative",
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

                    {/* Decorative circles */}

                    <Box
                        sx={{
                            position: "absolute",
                            width: 280,
                            height: 280,
                            borderRadius: "50%",
                            background: "rgba(99,102,241,0.12)",
                            top: -100,
                            right: -80
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            width: 180,
                            height: 180,
                            borderRadius: "50%",
                            background: "rgba(168,85,247,0.10)",
                            bottom: 30,
                            left: -70
                        }}
                    />

                    {/* Brand */}

                    <Box sx={{ position: "relative", zIndex: 2 }}>

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
                                    color: "#1E293B",
                                    letterSpacing: "-0.5px"
                                }}
                            >
                                Talha<span style={{ color: "#6366F1" }}>Dev</span>
                            </Typography>

                        </Stack>

                    </Box>


                    {/* Hero */}

                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "430px"
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: { md: "46px", lg: "52px" },
                                lineHeight: 1.08,
                                fontWeight: 800,
                                letterSpacing: "-2px",
                                color: "#1E293B",
                                mb: 3
                            }}
                        >
                            Build.
                            <br />
                            Create.
                            <br />

                            <Box
                                component="span"
                                sx={{
                                    background:
                                        "linear-gradient(90deg,#6366F1,#A855F7)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Share.
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
                            Welcome back to your creative space.
                            Continue writing, managing and sharing
                            your ideas with the community.
                        </Typography>


                        {/* Small feature */}

                        <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="center"
                            sx={{ mt: 4 }}
                        >

                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#6366F1",
                                    boxShadow:
                                        "0 0 0 6px rgba(99,102,241,0.10)"
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#475569"
                                }}
                            >
                                Your ideas deserve to be heard.
                            </Typography>

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
                                display: { xs: "flex", md: "none" },
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
                                Talha<span style={{ color: "#6366F1" }}>Dev</span>
                            </Typography>

                        </Box>


                        {/* Heading */}

                        <Box sx={{ mb: 4 }}>

                            <Typography
                                sx={{
                                    fontSize: { xs: "30px", sm: "34px" },
                                    fontWeight: 800,
                                    color: "#1E293B",
                                    letterSpacing: "-1px",
                                    mb: 1
                                }}
                            >
                                Welcome back 👋
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#64748B",
                                    fontSize: "15px"
                                }}
                            >
                                Sign in to continue to your account.
                            </Typography>

                        </Box>


                        {/* Form */}

                        <Stack spacing={2.2}>

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
                                variant="outlined"
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


                            <TextField
                                fullWidth
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={(e) =>
                                    handleSubmit(
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                                variant="outlined"
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
                                                    setShowPassword(!showPassword)
                                                }
                                                edge="end"
                                            >
                                                {showPassword
                                                    ? <VisibilityOff />
                                                    : <Visibility />
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
                                Login to account
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
                                onClick={signInWithGoogleHandler}
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


                        {/* Signup */}

                        <Typography
                            align="center"
                            sx={{
                                mt: 4,
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
                                Create one
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
