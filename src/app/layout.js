"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons từ lucide-react
export { notFound } from 'next/navigation';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md py-4 px-6 fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-semibold text-white" onClick={() => setMenuOpen(false)}>
              VinUniPQC
            </Link>

            {/* Menu Button (Mobile) */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6">
              <li><Link href="/people" className="text-white hover:text-gray-400">People</Link></li>
              <li><Link href="/publication" className="text-white hover:text-gray-400">Publications</Link></li>
              <li><Link href="/blog" className="text-white hover:text-gray-400">Blog</Link></li>
              <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden mt-4 p-4 space-y-3 rounded-lg">
              <li><Link href="/people" className="block text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>People</Link></li>
              <li><Link href="/publication" className="block text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Publications</Link></li>
              <li><Link href="/blog" className="block text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" className="block text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </nav>

        {/* Nội dung chính */}
        <main className="flex-grow pt-20 px-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
          <p>&copy; {new Date().getFullYear()} VinUniPQC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
