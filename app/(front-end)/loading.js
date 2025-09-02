export default function Loading() {
  return (
     <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="loader"></div>
        <p className="text-blue-800 heading-lg  animate-pulse">
          Loading...
        </p>
      </div>
      </div>
  );
}