import Link from 'next/link';
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

export const Navbar = ({ activePage }) => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#E5E3EA]/80 px-4 py-4 backdrop-blur-sm md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link
          href="/"
          className="flex flex-col items-center text-blue-800 no-underline"
        >
          <CurvedArrow className="h-3 text-orange-500" />
          <span className="font-galosText text-[25.11px]">
            Many-to-Many System
          </span>
          <CurvedArrow className="h-3 text-orange-500" flip />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={
                'font-galosText rounded-full px-4 py-2 text-sm shadow-sm ' +
                (activePage === link.title
                  ? 'text-grey-50 bg-blue-800'
                  : 'text-grey-600 bg-white hover:bg-gray-100')
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <a
          href="#"
          className="font-galosText text-grey-600 rounded-full bg-white px-5 py-2 text-sm shadow-sm transition-colors hover:bg-gray-100"
        >
          menu
        </a>
      </div>
    </nav>
  );
};
