"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Script from "next/script"; // Import Script từ Next.js
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguagePopup from "../components/LanguagePopup";
import { useTranslation } from "../hooks/useTranslation";

export { notFound } from "next/navigation";

function LayoutContent({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

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

  const menuItems = [
    { key: "home", href: "/", label: t("home") },
    { key: "people", href: "/people", label: t("people") },
    { key: "publications", href: "/publication", label: t("publications") },
    { key: "joinUs", href: "/join-us", label: t("joinUs") },
    { key: "contact", href: "/contact", label: t("contact") },
  ];

  return (
    <html lang="en">
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

        {/* Language Popup */}
        <LanguagePopup />

        {/* Language Switcher - Fixed Position */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

        {/* Navbar */}
        <nav className="fixed w-full top-0 z-40 bg-white px-6 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-row items-center h-20">
            {/* Logo */}
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Vcyber Logo"
                className="w-80 h-20 object-cover transition-all duration-300"
              />
            </Link>
            {/* Menu - Desktop */}
            <ul className="hidden lg:flex flex-row items-center text-xl space-x-16 ml-8 flex-nowrap">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[#000022] relative after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-[#f40000] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Hamburger - Mobile */}
            <div className="lg:hidden ml-auto flex items-center">
              <button
                className="text-[#191938]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden mt-4 p-4 space-y-3 rounded-lg">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="block text-[#000022]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
                {t("copyright")} {new Date().getFullYear()} vcyber.
              </p>
              <p className="text-sm">{t("allRightsReserved")}</p>
              <a href="/privacy-policy" className="text-sm underline">
                {t("privacyPolicy")}
              </a>
            </div>

            {/* Footer Navigation Links */}
            <div className="md:w-2/4 flex flex-col sm:flex-row justify-around mt-6 md:mt-0 gap-4 text-center sm:text-left">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="hover:underline">
                    {t("people")}
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/publication" className="hover:underline">
                    {t("publications")}
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="hover:underline">
                    {t("joinUs")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    {t("contact")}
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

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
