import React, { useState } from "react";
import { Link } from "react-router-dom";

function  Navbar  () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white shadow-lg">
            E
          </div>

          <span className="text-xl font-bold text-white">
            -<span className="text-blue-500">Shop</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            products
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-300 transition hover:bg-gray-800 hover:text-white md:hidden"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
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
              className="h-6 w-6"
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
      {isOpen && (
        <div className="border-t border-gray-800 bg-gray-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-gray-800 hover:text-white"
            >
              Contact
            </a>

            <div className="mt-3 flex gap-3 border-t border-gray-800 pt-4">
              <button className="flex-1 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800">
                Login
              </button>

              <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
                Get Started
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;