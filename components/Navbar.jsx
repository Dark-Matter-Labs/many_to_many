import { CurvedArrow } from './CurvedArrow';

const navLinks = [
  'System Overview',
  'Problems',
  'Legal topics',
  'Journey',
  'Learn by yourself',
  'Community',
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#E5E3EA]/80 px-4 py-4 backdrop-blur-sm md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <a
          href="#"
          className="flex flex-col items-center text-blue-800 no-underline"
        >
          <CurvedArrow className="h-3 text-orange-500" />
          <span className="font-galosText text-[25.11px]">M-to-M-Systems</span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-galosText text-grey-600 rounded-full bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:bg-gray-100"
            >
              {link}
            </a>
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
