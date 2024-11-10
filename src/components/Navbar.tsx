'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent background scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#f1c886] text-[#072638] py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src="/images/logo.png" alt="Logo" width={40} height={50} />
          </div>
        </Link>
        <div className="text-lg font-semibold">
          <h1 className="font-semibold text-3xl mt-3">Syeda Qurrat</h1>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6 mt-3">
        <ul className="flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-[#e5b970]" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/Journey" className="hover:text-[#e5b970]" onClick={handleLinkClick}>Journey</Link></li>
          <li><Link href="/projects" className="hover:text-[#e5b970]" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="/contact" className="hover:text-[#e5b970]" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? 'X' : '☰'}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#f1c886] text-[#072638] py-4 px-6 shadow-lg transition-all duration-300 ease-in-out ">
          <ul className="space-y-4 text-lg">
            <li><Link href="/" onClick={handleLinkClick} className="hover:text-[#e5b970]">Home</Link></li>
            <li><Link href="/Journey" onClick={handleLinkClick} className="hover:text-[#e5b970]">Journey</Link></li>
            <li><Link href="/projects" onClick={handleLinkClick} className="hover:text-[#e5b970]">Projects</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick} className="hover:text-[#e5b970]">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


