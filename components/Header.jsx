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
          muted
          playsInline
          preload="metadata"
          poster="/videoplace.webp"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        >
          <source
            src="/output-mobile.webm"
            type="video/webm"
            media="(max-width: 800px)"
          />
          <source src="/output.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="section-shadow-tb relative mb-2 w-full bg-white py-4">
        <div className="container-main py-8 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-20 md:py-12 lg:gap-20">
          <div className="relative z-10">
            <h1 className="font-galosText text-[8vw] leading-tight text-blue-800 sm:text-[7vw] md:text-[48.81px]">
              <span>Many</span>
              <span className="relative inline-block py-4">
                -to-
                <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-10/12 transform sm:-top-8">
                  <CurvedArrow className="h-[42px] w-[42px] text-orange-500 sm:h-[60px] sm:w-[60px]" />
                </span>
                <span className="pointer-events-none absolute -bottom-5 left-1/2 translate-x-1/4 transform sm:-bottom-6">
                  <CurvedArrow
                    className="h-[42px] w-[42px] text-orange-500 sm:h-[60px] sm:w-[60px]"
                    flip
                  />
                </span>
              </span>
              <span>Many System</span>
            </h1>
          </div>
          <p className="heading-lg z-10 mt-3 max-w-prose text-blue-800 sm:mt-4 md:max-w-lg">
            aims to support collaborations tackling complex, entangled
            challenges where disrupting norms and values, ownership, and power
            is essential.
          </p>
        </div>
      </header>
    </>
  );
};
