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
        className={
          'nav-bg fixed z-50 cursor-pointer rounded-full bg-white px-4 opacity-60 transition-opacity duration-200 hover:opacity-100' +
          (isMenuOpen ? ' top-0 left-0 py-8' : ' top-4 left-4 py-2')
        }
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <span
            className={`text-small text-grey-600 block transition-transform duration-200`}
          >
            close
          </span>
        ) : (
          <span
            className={`text-small text-grey-600 block transition-transform duration-200`}
          >
            menu
          </span>
        )}
      </button>

      {/* Sliding Navbar */}
      <div
        className={`fixed top-0 left-0 z-40 w-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Navbar />
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
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
          muted
          playsInline
          preload="metadata"
          poster="/videoplace.png"
          style={{ width: '100%', height: 'auto' }}
        >
          <source src="/output.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="section-shadow-tb relative mb-2 w-full bg-white py-10 lg:py-20">
        <div className="container-main sm:flex sm:flex-row sm:items-start sm:justify-center sm:gap-14 md:py-16 lg:gap-20">
        <div className="relative z-10">
          <h1 className="font-galosText text-[10vw] leading-tight text-blue-800 sm:text-[7vw] md:text-[48.81px]">
            <span>Many</span>
            <span className="relative inline-block py-4">
              -to-
              <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-10/12 transform sm:-top-8">
                <CurvedArrow className="h-[42px] w-[42px] text-orange-500 sm:h-[60px] sm:w-[60px]" />
              </span>
              <span className="pointer-events-none absolute -bottom-5 left-1/2 translate-x-1/4 transform sm:-bottom-6">
                <CurvedArrow
                  className="h-[42px] w-[42px] text-orange-500 sm:h-[60px] sm:w-[60px]"
                  flip
                />
              </span>
            </span>
            <span>Many System</span>
          </h1>
        </div>
        <p className="heading-lg z-10 mt-3 max-w-prose text-blue-800 sm:mt-4 md:max-w-lg">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
        </div>
      </header>
    </>
  );
};
