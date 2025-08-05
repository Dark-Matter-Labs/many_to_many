import { CurvedArrow } from './CurvedArrow';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-10 text-center">
      <div className="flex flex-col items-center text-blue-600">
        <CurvedArrow className="text-orange-500" />
        <span className="font-galosText my-2 text-2xl">
          Many-to-Many System
        </span>
        <CurvedArrow className="-scale-y-100 transform text-orange-500" />
      </div>
    </footer>
  );
}
