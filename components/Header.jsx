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
        className="fixed top-4 left-4 z-50 cursor-pointer rounded-full bg-white p-2 opacity-60 shadow-sm backdrop-blur-sm transition-opacity duration-200 hover:opacity-100"
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
          loop
          muted
          playsInline
          style={{ width: '100%', height: 'auto' }}
        >
          <source src="/output.webm" type="video/webm" autoPlay />
          <img
            src="/videoplace.png"
            title="Your browser does not support the <video> tag"
          ></img>
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="section-shadow relative mx-4 w-full flex-row items-start justify-center gap-20 bg-white py-20 sm:mx-0 sm:flex">
        <div className="relative z-10">
          <h1 className="font-galosText text-[48.81px] text-blue-800 md:text-[48.81px]">
            <span>Many</span>
            <span className="relative inline-block py-4">
              -to-
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-10/12 transform">
                <CurvedArrow className="h-[60px] w-[60px] text-orange-500" />
              </span>
              <span className="pointer-events-none absolute -bottom-6 left-1/2 translate-x-1/4 transform">
                <CurvedArrow
                  className="h-[60px] w-[60px] text-orange-500"
                  flip
                />
              </span>
            </span>
            <span>Many System</span>
          </h1>
        </div>
        <p className="heading-md text-grey-600 z-10 mt-4 max-w-lg">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
      </header>
    </>
  );
};
