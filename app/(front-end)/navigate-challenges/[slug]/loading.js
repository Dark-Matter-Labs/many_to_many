export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="loader"></div>
        <p className="heading-lg animate-pulse text-blue-800">Loading...</p>
      </div>
    </div>
  );
}
