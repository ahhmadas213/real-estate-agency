'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { FaSnapchatGhost } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'العقارات', href: '/properties' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'من نحن', href: '/about' },

  ];

  return (
    <header className="relative  -mb-16">
      {/* Main Header */}
      <div className="relative bg-white/10 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-2xl font-bold text-blue-400 ">الرؤية</span>
              </Link>
            </div>

            <div className='flex items-center gap-5 '>
              <Link href="/" target='_blank'>
                <X className='text-slate-200' size={24} />
              </Link>
              <Link href="/" target='_blank'>
                <Instagram className='text-slate-200' size={24} />
              </Link>
              <Link href="/" target='_blank'>
                <Facebook className='text-slate-200' size={24} />
              </Link>
              <Link href="/" target='_blank'>
                <FaSnapchatGhost className='text-slate-200' size={24} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative px-3 py-2 text-lg text-slate-100 font-medium transition-colors duration-200
                    ${pathname === item.href
                      ? '!text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400'
                      : 'text-gray-700 hover:text-blue-400'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}


              <Link href="/contact" className='py-2 px-10 cursor-pointer hover:bg-blue-950 transition-all duration-200 bg-black text-white'>
                تواصل معنا
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-200 hover:text-indigo-600 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white  shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-indigo-600">القائمة</span>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-indigo-600 p-2"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                px-6 py-3 text-sm font-medium transition-colors duration-200
                ${pathname === item.href
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }
              `}
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}

          {/* social icon */}



          <Link href="/contact" className='py-2 px-10 w-full mt-8 mx-auto cursor-pointer hover:bg-blue-950 transition-all duration-200 bg-black text-white'>
            تواصل معنا
          </Link>

          <div className='flex mt-8 justify-center items-center gap-5'>
            <Link href="/">
              <X />
            </Link>
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
            <Link href="/" target='_blank'>
              <FaSnapchatGhost className='text-slate-200' size={24} />
            </Link>
          </div>
        </div>

      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;