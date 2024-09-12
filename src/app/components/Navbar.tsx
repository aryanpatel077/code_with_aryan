"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e:any) => {
    if (isOpen && !e.target.closest('#menu-panel')) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="text-2xl font-bold text-gray-900 cursor-pointer">GxAryan</div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" passHref>
              <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</div>
            </Link>
            <Link href="/timeline" passHref>
              <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Timeline</div>
            </Link>
            <Link href="/notes" passHref>
              <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Notes</div>
            </Link>
            <Link href="/contact" passHref>
              <div className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</div>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="menu-panel"
        className={`fixed inset-y-0 right-0 w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center pt-12  min-h-screen space-y-12 relative">
          <button
            onClick={closeMenu}
            className="absolute top-10 right-12 text-gray-900 hover:text-blue-600 focus:outline-none"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" passHref>
            <div onClick={closeMenu} className="text-gray-900 hover:text-blue-600 text-lg font-medium cursor-pointer">Home</div>
          </Link>
          <Link href="/about" passHref>
            <div onClick={closeMenu} className="text-gray-900 hover:text-blue-600 text-lg font-medium cursor-pointer">About</div>
          </Link>
          <Link href="/timeline" passHref>
            <div onClick={closeMenu} className="text-gray-900 hover:text-blue-600 text-lg font-medium cursor-pointer">Timeline</div>
          </Link>
          <Link href="/notes" passHref>
            <div onClick={closeMenu} className="text-gray-900 hover:text-blue-600 text-lg font-medium cursor-pointer">Notes</div>
          </Link>
          <Link href="/contact" passHref>
            <div onClick={closeMenu} className="text-gray-900 hover:text-blue-600 text-lg font-medium cursor-pointer">Contact</div>
          </Link>
         <div className="pt-[23vh]"> <SocialLinks/> </div>
        </div>
       
      </div>
    </nav>
  );
}