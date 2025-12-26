'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[9999] w-full animate-fadeInDown">
      <div className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0 animate-scaleIn animation-delay-200">
              <Link href="/" className="flex items-center hover-scale">
                <Image
                  src="/logo/blend wise.png"
                  alt="Blendwise Logo"
                  width={125}
                  height={45}
                  priority
                  className="h-auto w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${
                    pathname === '/'
                      ? 'text-[#8a21f0]'
                      : 'text-gray-700 hover:text-[#35a5e8]'
                  }`}
                >
                  HOME
                </Link>
                <Link
                  href="/services"
                  className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${
                    pathname === '/services'
                      ? 'text-[#8a21f0]'
                      : 'text-gray-700 hover:text-[#35a5e8]'
                  }`}
                >
                  SERVICES
                </Link>
                <Link
                  href="/packages"
                  className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${
                    pathname === '/packages'
                      ? 'text-[#8a21f0]'
                      : 'text-gray-700 hover:text-[#35a5e8]'
                  }`}
                >
                  PACKAGES
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${
                    pathname === '/contact'
                      ? 'text-[#8a21f0]'
                      : 'text-gray-700 hover:text-[#35a5e8]'
                  }`}
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center animate-fadeInRight animation-delay-400">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#8a21f0] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#7a1dd8] animate-pulse hover-scale"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'rotate-45 translate-y-2 bg-[#8a21f0]'
                      : 'bg-gray-700'
                  }`}></span>
                  <span className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-0'
                      : 'bg-gray-700'
                  }`}></span>
                  <span className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? '-rotate-45 -translate-y-2 bg-[#8a21f0]'
                      : 'bg-gray-700'
                  }`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="fixed inset-0 bg-white">
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-[9999]">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md transition-colors duration-300"
              aria-label="Close menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className="w-full h-0.5 bg-[#8a21f0] rotate-45 translate-y-2 transition-all duration-300"></span>
                <span className="w-full h-0.5 bg-[#8a21f0] -rotate-45 -translate-y-2 transition-all duration-300"></span>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                pathname === '/' ? 'text-[#8a21f0]' : 'text-gray-700 hover:text-[#35a5e8]'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                pathname === '/services' ? 'text-[#8a21f0]' : 'text-gray-700 hover:text-[#35a5e8]'
              }`}
            >
              SERVICES
            </Link>
            <Link
              href="/packages"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                pathname === '/packages' ? 'text-[#8a21f0]' : 'text-gray-700 hover:text-[#35a5e8]'
              }`}
            >
              PACKAGES
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                pathname === '/contact' ? 'text-[#8a21f0]' : 'text-gray-700 hover:text-[#35a5e8]'
              }`}
            >
              CONTACT US
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="bg-[#8a21f0] text-white font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#7a1dd8] mt-4"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
