import { CurvedArrow } from './CurvedArrow';

export const Header = () => {
  return (
    <>
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
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="section-shadow relative mx-4 w-full flex-row items-start justify-center gap-20 bg-white py-20 sm:mx-0 sm:flex">
        <div className="relative z-10 flex flex-col items-center">
          <CurvedArrow className="text-orange-500" />
          <h1 className="font-galosText text-[48.81px] text-blue-800 md:text-[48.81px]">
            Many-to-Many System
          </h1>
          <CurvedArrow
            className="-scale-y-100 transform text-orange-500"
            flip
          />
        </div>
        <p className="heading-md text-grey-600 z-10 mt-4 max-w-lg">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
      </header>
    </>
  );
};
