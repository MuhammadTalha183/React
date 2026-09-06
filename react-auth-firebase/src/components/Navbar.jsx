import React, { useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import app from "../firebase/config";

const auth = getAuth(app);

function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.log("Logout Error:", error);
        }
    };

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/85 backdrop-blur-xl">

            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div
                    onClick={() => handleNavigate("/")}
                    className="flex cursor-pointer items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-lg font-bold text-white shadow-md">
                        A
                    </div>

                    <div className="hidden xs:block">
                        <h1 className="text-lg font-bold leading-none text-gray-900">
                            MyApp
                        </h1>
                        <p className="mt-1 text-xs text-gray-500">
                            Dashboard
                        </p>
                    </div>
                </div>


                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <button
                        onClick={() => handleNavigate("/")}
                        className="relative text-sm font-semibold text-gray-600 transition hover:text-blue-600"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => handleNavigate("/dashboard")}
                        className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => handleNavigate("/about")}
                        className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
                    >
                        About
                    </button>

                </div>


                {/* Desktop Logout */}
                <button
                    onClick={handleLogout}
                    className="hidden items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-red-600 hover:shadow-lg active:scale-95 md:flex"
                >
                    <span className="text-lg">↪</span>
                    Logout
                </button>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 md:hidden"
                >
                    {menuOpen ? (
                        <span className="text-2xl">×</span>
                    ) : (
                        <span className="text-2xl">☰</span>
                    )}
                </button>

            </div>


            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg md:hidden">

                    <div className="flex flex-col gap-2">

                        <button
                            onClick={() => handleNavigate("/")}
                            className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            🏠 Home
                        </button>

                        <button
                            onClick={() => handleNavigate("/dashboard")}
                            className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            📊 Dashboard
                        </button>

                        <button
                            onClick={() => handleNavigate("/about")}
                            className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            ℹ️ About
                        </button>

                        <div className="my-2 h-px bg-gray-100"></div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 active:scale-[0.98]"
                        >
                            <span className="text-lg">↪</span>
                            Logout
                        </button>

                    </div>

                </div>
            )}

        </nav>
    );
}

export default Navbar;
