// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white px-5 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
   
        <div className="text-xl font-serif tracking-widest">PROPERTY BAZAR</div>

     
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu - Desktop */}
        <div className="hidden md:flex space-x-7 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/listings">Action Listing</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-2">
          <Link href="/login">
            <button className="bg-white text-teal-800 font-semibold px-4 py-1 rounded">Login</button>
          </Link>
          <Link href="/register">
            <button className="bg-white text-teal-800 font-semibold px-4 py-1 rounded">Register</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-4 flex flex-col items-start">
          <Link href="/" className="block w-full">Home</Link>
          <Link href="/about" className="block w-full">About Us</Link>
          <Link href="/listings" className="block w-full">Action Listing</Link>
          <Link href="/categories" className="block w-full">Categories</Link>
          <Link href="/contact" className="block w-full">Contact Us</Link>
          <div className="pt-2 space-x-2">
            <Link href="/login">
              <button className="bg-white text-teal-800 font-semibold px-4 py-2 rounded">Login</button>
            </Link>
            <Link href="/register">
              <button className="bg-white text-teal-800 font-semibold px-4 py-1 rounded">Register</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
