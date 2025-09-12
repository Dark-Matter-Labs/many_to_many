import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CurvedArrow } from './CurvedArrow';

const navLinks = [
  {
    title: 'Discover the System',
    url: '/overview',
  },
  {
    title: 'Tools & Examples',
    url: '/tools',
  },
  {
    title: 'Navigate Challenges',
    url: '/problems',
  },
  {
    title: 'Legal Considerations',
    url: '/legal-tools',
  },
];

export const Navbar = ({ activePage, transparent = false }) => {
  return (
    <nav
      className={
        'sticky top-0 left-0 z-50 w-full px-4 py-4 md:px-8 lg:px-16 ' +
        (transparent ? 'bg-transparent' : 'nav-bg')
      }
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link
          href="/"
          className="flex flex-col items-center text-blue-800 no-underline"
        >
          <span className="font-galosText text-[25.11px]">
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
        {/* Segmented control */}
        <div className="hidden lg:flex">
          <div className="relative isolation-auto flex rounded-full">
            {navLinks.map((link, index) => {
              const zIndexClass =
                ['z-40', 'z-30', 'z-20', 'z-10'][index] || 'z-10';
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className={
                    'font-galosText rounded-full px-10 py-2 text-sm shadow-[0_0_8px_0_rgba(122,122,122,0.40)] transition-all duration-200 ' +
                    (index !== 0 ? ' -ml-7' : ' ') +
                    ' ' +
                    zIndexClass +
                    ' ' +
                    (activePage === link.title
                      ? 'text-grey-50 bg-blue-800 shadow-[0_8px_20px_rgba(0,95,255,0.35)]'
                      : 'text-grey-600 bg-white ring-1 ring-black/5 hover:bg-white')
                  }
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        <Menu as="div" className="relative inline-block">
          <MenuButton className="font-galosText text-grey-600 inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-5 py-2 text-sm shadow-[0_0_8px_0_rgba(122,122,122,0.40)] transition-colors hover:bg-gray-100 cursor-pointer">
            more
            <ChevronDownIcon
              aria-hidden="true"
              className="text-grey-400 -mr-1 size-5"
            />
          </MenuButton>

          <MenuItems
            transition
            className="outline-grey-600/10 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white outline-1 -outline-offset-1 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="/community"
                  className="font-galosText text-grey-600 data-focus:bg-grey-600/5 data-focus:text-grey-800 block px-4 py-2 text-sm data-focus:outline-hidden"
                >
                  Learnings from the field
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/journey"
                  className="font-galosText text-grey-600 data-focus:bg-grey-600/5 data-focus:text-grey-800 block px-4 py-2 text-sm data-focus:outline-hidden"
                >
                  Journey
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/community"
                  className="font-galosText text-grey-600 data-focus:bg-grey-600/5 data-focus:text-grey-800 block px-4 py-2 text-sm data-focus:outline-hidden"
                >
                  Community
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://form.typeform.com/to/jpm8rdp1"
                  rel="noopener noreferrer"
                  className="font-galosText text-grey-600 data-focus:bg-grey-600/5 data-focus:text-grey-800 block px-4 py-2 text-sm data-focus:outline-hidden"
                >
                  Subscribe to the newsletter
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};
