"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons từ lucide-react
export { notFound } from 'next/navigation';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 bg-white px-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img src="/logo.jpg" alt="Vcyber Logo" className="w-80 h-20 object-cover transition-all duration-300" />
            </Link>

            {/* Menu Button (Mobile) */}
            <button
              className="lg:hidden text-[#191938]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex text-xl space-x-20">
              <Link
                href="/"
                className="text-[#000022] relative 
                            after:absolute after:left-0 after:bottom-[-6px] 
                            after:w-full after:h-[3px] after:bg-[#f40000] 
                            after:scale-x-0 after:origin-left after:transition-transform 
                            after:duration-300 hover:after:scale-x-100"
              >
                Home
              </Link>

              <li>
              <Link
                href="/people"
                className="text-[#000022] relative 
                            after:absolute after:left-0 after:bottom-[-6px] 
                            after:w-full after:h-[3px] after:bg-[#f40000] 
                            after:scale-x-0 after:origin-left after:transition-transform 
                            after:duration-300 hover:after:scale-x-100"
              >
                  People
                </Link>
              </li>
              <li>
              <Link
                href="/publication"
                className="text-[#000022] relative 
                            after:absolute after:left-0 after:bottom-[-6px] 
                            after:w-full after:h-[3px] after:bg-[#f40000] 
                            after:scale-x-0 after:origin-left after:transition-transform 
                            after:duration-300 hover:after:scale-x-100"
              >
                  Publications
                </Link>
              </li>
              <li>
              <Link
                href="/join-us"
                className="text-[#000022] relative 
                            after:absolute after:left-0 after:bottom-[-6px] 
                            after:w-full after:h-[3px] after:bg-[#f40000] 
                            after:scale-x-0 after:origin-left after:transition-transform 
                            after:duration-300 hover:after:scale-x-100"
              >
                  Join Us
                </Link>
              </li>
              <li>
              <Link
                href="/contact"
                className="text-[#000022] relative 
                            after:absolute after:left-0 after:bottom-[-6px] 
                            after:w-full after:h-[3px] after:bg-[#f40000] 
                            after:scale-x-0 after:origin-left after:transition-transform 
                            after:duration-300 hover:after:scale-x-100"
              >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden mt-4 p-4 space-y-3 rounded-lg">
              <li><Link href="/" className="block text-[#000022]" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link href="/people" className="block text-[#000022]" onClick={() => setMenuOpen(false)}>People</Link></li>
              <li><Link href="/publication" className="block text-[#000022]" onClick={() => setMenuOpen(false)}>Publications</Link></li>
              <li><Link href="/join-us" className="block text-[#000022]" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link href="/contact" className="block text-[#000022]" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </nav>

        {/* Nội dung chính */}
        <main className="flex-grow pt-20 px-4">{children}</main>

        {/* Footer */}
        <footer className="relative bg-[#c10000] text-white py-10 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/4">
              <img src="/footerlogo.png" alt="Vcyber Logo" className="w-32 mb-4" />
              <p className="text-sm">Copyright © {new Date().getFullYear()} VinUni.</p>
              <p className="text-sm">All Rights Reserved.</p>
              <a href="/privacy-policy" className="text-sm underline">Privacy Policy</a>
            </div>
            <div className="md:w-2/4 flex justify-around mt-6 md:mt-0">
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/people" className="hover:underline">People</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="/publication" className="hover:underline">Publications</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="absolute bottom-4 right-4 bg-white text-[#1E3A8A] p-2 rounded-full shadow-lg hover:bg-gray-200">
            ⬆️
          </button>
        </footer>
      </body>
    </html>
  );
}
