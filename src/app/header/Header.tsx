"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#fcf9f3] shadow-md border-b border-gray-200 transition-transform duration-300 ${
    hidden ? "-translate-y-full" : "translate-y-0"
  }`}
>
   <div className="w-full px-6 py-4">

    {/* ✅ MOBIL */}
    <div className="flex items-center justify-between md:hidden">
      <div className="flex items-center gap-4">
        {/* Burger-Button */}
        <button
          aria-label="Menü öffnen"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
          <span role="img" aria-label="Logo">✽</span> Kivocado
        </Link>
      </div>
    </div>

    {/* ✅ DESKTOP – alles links */}
<div className="hidden md:flex items-center gap-10">
  {/* Logo */}
  <Link href="/" className="text-2xl font-bold flex items-center gap-1">
    <span role="img" aria-label="Logo">✽</span> Kivocado
  </Link>

  {/* Navigation */}
  <nav className="flex space-x-6 text-sm font-medium">
    <Link href="/" className="hover:underline">Startseite</Link>
    <Link href="/tools" className="hover:underline">Kategorien</Link>
    <Link href="/vergleiche" className="hover:underline">Vergleiche</Link>
    <Link href="/blog" className="hover:underline">Blog</Link>
  </nav>
</div>
</div>


  {/* ✅ Mobiles Menü */}
  {isMenuOpen && (
    <div className="md:hidden bg-[#fcf9f3] border-t border-gray-200 px-6 py-4">
      <nav className="flex flex-col space-y-4 text-sm font-medium">
        <Link href="/tools" onClick={() => setIsMenuOpen(false)}>Kategorien</Link>
        <Link href="/vergleiche" onClick={() => setIsMenuOpen(false)}>Vergleiche</Link>
        <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
      </nav>
    </div>
  )}
</header>



  );
};

export default Header;
