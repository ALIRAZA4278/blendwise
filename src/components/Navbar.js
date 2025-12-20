'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/95 shadow-md' : 'backdrop-blur-sm bg-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/logo/blend wise.png"
            alt="Blendwise Logo"
            width={150}
            height={50}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className={`font-bold text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-400 after:content-[''] ${
                pathname === '/'
                  ? scrolled
                    ? 'text-purple-600 after:opacity-100'
                    : 'text-cyan-400 after:opacity-100'
                  : scrolled
                    ? 'text-gray-700 hover:text-purple-600 after:opacity-0 hover:after:opacity-100'
                    : 'text-white hover:text-cyan-400 after:opacity-0 hover:after:opacity-100'
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`font-bold text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-400 after:content-[''] ${
                pathname === '/services'
                  ? scrolled
                    ? 'text-purple-600 after:opacity-100'
                    : 'text-cyan-400 after:opacity-100'
                  : scrolled
                    ? 'text-gray-700 hover:text-purple-600 after:opacity-0 hover:after:opacity-100'
                    : 'text-white hover:text-cyan-400 after:opacity-0 hover:after:opacity-100'
              }`}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/packages"
              className={`font-bold text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-400 after:content-[''] ${
                pathname === '/packages'
                  ? scrolled
                    ? 'text-purple-600 after:opacity-100'
                    : 'text-cyan-400 after:opacity-100'
                  : scrolled
                    ? 'text-gray-700 hover:text-purple-600 after:opacity-0 hover:after:opacity-100'
                    : 'text-white hover:text-cyan-400 after:opacity-0 hover:after:opacity-100'
              }`}
            >
              PACKAGES
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-bold text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-cyan-400 after:content-[''] ${
                pathname === '/contact'
                  ? scrolled
                    ? 'text-purple-600 after:opacity-100'
                    : 'text-cyan-400 after:opacity-100'
                  : scrolled
                    ? 'text-gray-700 hover:text-purple-600 after:opacity-0 hover:after:opacity-100'
                    : 'text-white hover:text-cyan-400 after:opacity-0 hover:after:opacity-100'
              }`}
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-bold text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50"
        >
          Get a Free Quote
        </button>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
