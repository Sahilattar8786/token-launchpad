import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Replace with any icon lib or SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">Mintzy</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#how" className="hover:text-indigo-600">How It Works</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li><a href="#features" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Features</a></li>
            <li><a href="#how" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">How It Works</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Testimonials</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;