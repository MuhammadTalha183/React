import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "About"];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5  sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-around px-10  md:justify-evenly">

          {/* Logo */}
          <a href="#" className="flex   h-10 items-center gap-2">
            <div className="flex   h-9 w-9 items-center  justify-center rounded-xl bg-black text-sm font-bold text-white">
              M
            </div>

            <span className="text-xl font-bold tracking-tight text-gray-900">
              ModernApp
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4  md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`rounded-lg  px-4 py-2 text-xl font-medium transition ${
                  index === 0
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-100  hover:text-gray-900"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center w-48 h-10 gap-3 md:flex">
            <button className="px-6 py-4  text-xl font-medium text-gray-600 transition hover:text-gray-900">
              Sign in
            </button>

            <button className="rounded-xl  h-10 w-28 bg-gray-900   text-xl font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-1 text-center h-10 text-xl font-medium transition ${
                  index === 0
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link}
              </a>
            ))}

            <div className="flex flex-col gap-3 items-center justify-center  mt-3 border-t text-center h-20 border-gray-100 pt-3">
              <button className=" w-full rounded-xl  text-xl font-medium text-gray-600 hover:bg-gray-50">
                Sign in
              </button>

              <button className="w-50 text-center rounded-xl bg-gray-900 px-4   text-xl h-10  font-semibold text-white transition hover:bg-gray-800">
                Get Started
              </button>
            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;