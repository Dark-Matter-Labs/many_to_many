import { CurvedArrow } from './CurvedArrow';
import ImageCrossfade from '../components/ImageCrossfade';

export const Header = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          maxWidth: '100vw',
          height: '526px', // Set a specific height for the container
          marginTop: '4rem',
        }}
      >
        <ImageCrossfade
          interval={300} // Time each image is visible
          transitionSpeed={600} // Speed of the fade
        />
      </div>
      <header className="relative my-10 flex w-full flex-row justify-center gap-10 overflow-hidden">
        {/* Background abstract shape */}
        <div className="z-0 rounded-[50%] bg-blue-400 opacity-40 blur-3xl filter"></div>
        <div className="z-0 rounded-[50%] bg-purple-400 opacity-30 blur-3xl filter"></div>

        <div className="relative z-10 flex flex-col items-center">
          <CurvedArrow className="text-orange-500" />
          <h1 className="font-galosText my-4 text-[48.81px] text-blue-800 md:text-[48.81px]">
            Many-to-Many-Systems
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
