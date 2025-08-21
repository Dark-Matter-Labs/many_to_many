'use client';

import { useState } from 'react';
import { CurvedArrow } from './CurvedArrow';
import { Navbar } from './Navbar';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm opacity-40 hover:opacity-100 transition-opacity duration-200"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-gray-800 transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Sliding Navbar */}
      <div className={`fixed top-0 left-0 w-full transform transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Navbar />
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Original Header Content */}
      <div
        style={{
          width: '100vw',
          maxWidth: '100vw',
          marginTop: '0rem',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: 'auto' }}
        >
          <source src="/output.webm" type="video/webm" autoPlay />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="section-shadow relative mx-4 w-full flex-row items-start justify-center gap-20 bg-white py-20 sm:mx-0 sm:flex">
        <div className="relative z-10 flex flex-col items-center">
          <CurvedArrow className="text-orange-500" />
          <h1 className="font-galosText text-[48.81px] text-blue-800 md:text-[48.81px]">
            Many-to-Many System
          </h1>
          <CurvedArrow
            className="-scale-y-100 transform text-orange-500"
            flip
          />
        </div>
        <p className="heading-md text-grey-600 z-10 mt-4 max-w-lg">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
      </header>
    </>
  );
};