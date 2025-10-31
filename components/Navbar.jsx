'use client';

import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import { usePathname } from 'next/navigation';
import { CurvedArrow } from './CurvedArrow';

const navLinks = [
  { title: 'Discover the System', url: '/discover-the-system' },
  { title: 'Navigate Challenges', url: '/navigate-challenges' },
  { title: 'Tools & Examples', url: '/tools' },
  { title: 'Learnings from the Field', url: '/learnings-from-the-field' },
  { title: 'Legal Architecture', url: '/legal-architecture' },
  { title: 'Journey', url: '/journey' },
];

const Navbar = ({ activePage, transparent = false }) => {
  const pathname = usePathname();
  const isActive = useCallback((url, title) => {
    if (activePage) return activePage === title;
    if (!pathname) return false;
    return pathname.startsWith(url);
  }, [activePage, pathname]);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  return (
    <nav
      className={
        'fixed top-0 left-0 z-50 w-full px-4 py-4 ' +
        (transparent ? 'bg-transparent' : 'bg-transparent')
      }
    >
      <div className="relative mx-auto flex w-full max-w-[1351px] items-center justify-between rounded-[100px] bg-[#FBFBFF]/90 px-4 py-3 shadow-[0_2px_2px_0_rgba(251,251,255,0.90)_inset,0_-3px_4px_0_rgba(255,255,255,0.50)_inset,0_4px_4px_0_rgba(105,105,105,0.25),0_4px_20px_0_rgba(137,137,137,0.25)_inset] md:h-[87px] md:px-8">
        <Link
          href="/"
          className="flex flex-col items-center text-blue-800 no-underline"
        >
          <span className="font-galosText text-[19.72px]">
            Many
            <span className="relative inline-block py-2">
              -to-
              <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-10/12 transform">
                <CurvedArrow className="h-2 text-orange-500" />
              </span>
              <span className="pointer-events-none absolute -bottom-4 left-1/2 translate-x-1/4 transform">
                <CurvedArrow className="h-2 text-orange-500" flip />
              </span>
            </span>
            Many System
          </span>
        </Link>

        {/* Desktop/Large screens nav */}
        <div className="ml-4 hidden flex-1 overflow-x-auto lg:block">
          <div className="flex items-center justify-center gap-6 whitespace-nowrap md:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={
                  'font-galosText text-[14px] tracking-[-0.308px] transition-colors ' +
                  (isActive(link.url, link.title)
                    ? 'text-[#005FFF]'
                    : 'text-[#5A5A5A] hover:text-[#005FFF]')
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger for tablet and smaller */}
        <button
          aria-label="Open navigation menu"
          className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-[#5A5A5A] hover:text-[#005FFF] lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M3.75 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] right-3 left-3 z-50 rounded-2xl bg-[#FBFBFF] p-2 shadow-[0_2px_2px_0_rgba(255,255,255,0.85)_inset,0_-3px_4px_0_rgba(255,255,255,0.50)_inset,0_4px_4px_0_rgba(105,105,105,0.25),0_4px_20px_0_rgba(137,137,137,0.25)_inset] lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={closeMenu}
                className={
                  'font-galosText block rounded-md px-4 py-3 text-[14px] tracking-[-0.308px] ' +
                  (isActive(link.url, link.title)
                    ? 'text-[#005FFF]'
                    : 'text-[#5A5A5A] hover:bg-black/5 hover:text-[#005FFF]')
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
export default memo(Navbar);
