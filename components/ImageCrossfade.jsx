"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// --- Configuration ---
// Add the paths to your 10 images here
const imagePaths = [
  "/anim-1.png",
  "/anim-2.png",
  "/anim-3.png",
  "/anim-4.png",
  "/anim-5.png",
  "/anim-6.png",
  "/anim-7.png",
  "/anim-8.png",
  "/anim-9.png",
  "/anim-10.png",
];

// Preload images for smoother transitions, especially on the first loop
const preloadedImages = [];
if (typeof window !== "undefined") {
  // Ensure this only runs on the client
  imagePaths.forEach((src) => {
    const img = new window.Image();
    img.src = src;
    preloadedImages.push(img);
  });
}

/**
 * A component that smoothly cross-fades between a series of images in a loop.
 * @param {object} props
 * @param {number} [props.interval=400] - The time (in ms) each image is displayed. The total time for one step is interval + transitionSpeed.
 * @param {number} [props.transitionSpeed=500] - The duration (in ms) of the fade animation.
 */
const ImageCrossfade = ({ interval = 400, transitionSpeed = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to advance the image index
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, interval + transitionSpeed); // Wait for the transition to finish before the next interval

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [interval, transitionSpeed]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {imagePaths.map((src, index) => (
        <div
          key={src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: currentIndex === index ? 1 : 0,
            transition: `opacity ${transitionSpeed}ms ease-in-out`,
            // The zIndex isn't strictly necessary with this opacity method,
            // but can prevent potential flashing on some browsers.
            zIndex: currentIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Animation frame ${index + 1}`}
            fill // Or "cover", "fill", etc., depending on your needs
            priority={index === 0} // Helps load the first image faster for LCP
            unoptimized={true} // Recommended for animations to prevent Next.js from changing image formats
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCrossfade;
