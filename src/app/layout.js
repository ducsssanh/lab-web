"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Script from "next/script"; // Import Script từ Next.js

export { notFound } from "next/navigation";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-9FL93G3YHV");
    }
  }, []);

  return (
    <html lang="en">
    <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9FL93G3YHV"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9FL93G3YHV');
          `}
        </script>
    </Head>
      <body className="min-h-screen flex flex-col">
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9FL93G3YHV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9FL93G3YHV');
          `}
        </Script>

        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 bg-white px-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/logo.jpg"
                alt="Vcyber Logo"
                className="w-80 h-20 object-cover transition-all duration-300"
              />
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
              {["Home", "People", "Publications", "Join Us", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-[#000022] relative after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-[#f40000] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden mt-4 p-4 space-y-3 rounded-lg">
              {["Home", "People", "Publications", "Join Us", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="block text-[#000022]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </nav>

        {/* Nội dung chính */}
        <main className="flex-grow pt-20 px-4">{children}</main>

        {/* Footer */}
        <footer className="relative bg-[#c10000] text-white py-10 px-6 text-center sm:text-left">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Logo & Copyright Section */}
            <div className="md:w-1/4 text-center md:text-left">
              <img
                src="/footerlogo.png"
                alt="Vcyber Logo"
                className="w-32 mb-4 mx-auto md:mx-0"
              />
              <p className="text-sm">
                Copyright © {new Date().getFullYear()} vcyber.
              </p>
              <p className="text-sm">All Rights Reserved.</p>
              <a href="/privacy-policy" className="text-sm underline">
                Privacy Policy
              </a>
            </div>

            {/* Footer Navigation Links */}
            <div className="md:w-2/4 flex flex-col sm:flex-row justify-around mt-6 md:mt-0 gap-4 text-center sm:text-left">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="hover:underline">
                    People
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/publication" className="hover:underline">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="hover:underline">
                    Join us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll-to-Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-white text-[#1E3A8A] p-3 rounded-full shadow-lg hover:bg-gray-200"
          >
            ⬆️
          </button>
        </footer>
      </body>
    </html>
  );
}
