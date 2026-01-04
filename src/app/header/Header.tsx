"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // ✅ WICHTIG: Next.js interner Link

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 80);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 bg-[#fcf9f3] shadow-md border-b border-gray-200 transition-transform duration-300 ${
    hidden ? "-translate-y-full" : "translate-y-0"
  }`}
>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Links: Logo + Navigation */}
        <div className="flex items-center space-x-6">
          {/* ✅ Logo-Link */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span role="img" aria-label="Logo">✽</span> Kivocado
          </Link>

          {/* ✅ Navigation – Desktop */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/tools" className="hover:underline">Kategorien</Link>

            <Link href="/vergleiche" className="hover:underline">Vergleiche</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </nav>
        </div>

        {/* Burger Menu – nur mobil */}
        <div className="md:hidden">
          <button aria-label="Menü öffnen">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;