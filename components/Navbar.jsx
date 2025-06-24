import { CurvedArrow } from "./CurvedArrow";

const navLinks = [
  "System Overview",
  "Problems",
  "Legal topics",
  "Journey",
  "Learn by yourself",
  "Community",
];

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 fixed top-0 left-0 z-50 bg-[#E5E3EA]/80 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="flex flex-col items-center text-blue-800 no-underline"
        >
          <CurvedArrow className="text-orange-500 h-3" />
          <span className="font-galosText text-[25.11px]">M-to-M-Systems</span>
        </a>
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-2 font-galosText text-sm text-grey-600 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="px-5 py-2  font-galosText text-sm text-grey-600 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
        >
          menu
        </a>
      </div>
    </nav>
  );
};
