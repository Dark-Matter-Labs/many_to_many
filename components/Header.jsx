import { CurvedArrow } from "./CurvedArrow";
import ImageCrossfade from "../components/ImageCrossfade";

export const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          height: "526px", // Set a specific height for the container
          marginTop: "4rem",
        }}
      >
        <ImageCrossfade
          interval={300} // Time each image is visible
          transitionSpeed={600} // Speed of the fade
        />
      </div>
      <header className="relative w-full flex flex-row  gap-10  mt-8 justify-center overflow-hidden">
        {/* Background abstract shape */}
        <div className=" bg-blue-400 opacity-40 rounded-[50%] filter blur-3xl z-0"></div>
        <div className="  bg-purple-400 opacity-30 rounded-[50%] filter blur-3xl z-0"></div>

        <div className="relative z-10 flex flex-col items-center">
          <CurvedArrow className="text-orange-500" />
          <h1 className="font-galosText text-[48.81px] md:text-[48.81px] text-blue-800 my-4">
            Many-to-Many-Systems
          </h1>
          <CurvedArrow className="text-orange-500 transform -scale-y-100" />
        </div>
        <p className="font-galosText relative z-10 max-w-xl mt-8 text-lg text-grey-600 px-4">
          aims to support collaborations tackling complex, entangled challenges
          where disrupting norms and values, ownership, and power is essential.
        </p>
      </header>
    </>
  );
};
