import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sticky top-0 z-50">
      <header className="mx-auto max-w-7xl rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
        <nav className="flex items-center justify-between px-6 py-3.5">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-gray-900 group">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 group-hover:opacity-40 transition-opacity"></span>
              <div className="h-2.5 w-2.5 rounded-full bg-blue-600 transition-transform group-hover:scale-110" />
            </div>
            <span className="font-semibold text-gray-900">
              Dev<span className="text-gray-400 font-normal">/</span><span className="text-blue-600">Studio</span>
            </span>
          </a>

          {/* Desktop Menu Links */}
          <ul className="hidden md:flex items-center gap-x-1 bg-gray-100/50 p-1 rounded-xl border border-gray-200/30">
            <li>
              <a href="#" className="px-4 py-1.5 text-sm font-medium rounded-lg text-blue-600 bg-white shadow-sm transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="px-4 py-1.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="px-4 py-1.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="px-4 py-1.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
                About
              </a>
            </li>
          </ul>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:block">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 active:scale-98 transition-all shadow-sm">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button" 
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 md:hidden hover:bg-gray-100/80 active:scale-95 transition-all"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-100/60">
            <ul className="space-y-1">
              <li>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50/50">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
            </ul>
            <div className="pt-3 border-t border-gray-100/60">
              <a href="#" className="block w-full text-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
