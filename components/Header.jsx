import { CurvedArrow } from './CurvedArrow';

export const Header = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          maxWidth: '100vw',
          marginTop: '4rem',
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
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="relative my-20 flex h-fit w-full flex-row justify-center gap-10 overflow-hidden">
        {/* Background abstract shape */}
        <div className="z-0 rounded-[50%] bg-blue-400 opacity-40 blur-3xl filter"></div>
        <div className="z-0 rounded-[50%] bg-purple-400 opacity-30 blur-3xl filter"></div>

        <div className="relative z-10 flex flex-col items-center">
          <CurvedArrow className="text-orange-500" />
          <h1 className="font-galosText my-4 text-[48.81px] text-blue-800 md:text-[48.81px]">
            Many-to-Many-System
          </h1>
          <CurvedArrow className="-scale-y-100 transform text-orange-500" />
        </div>
        <p className="font-galosText text-grey-600 relative z-10 mt-8 max-w-xl px-4 text-lg">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
      </header>
    </>
  );
};
