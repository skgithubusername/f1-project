// slider afte navbar

import React, { useEffect, useState } from "react";
import img1 from '../img/Property 1=Default.png';
import img2 from '../img/Property 1=Variant2.png';
import img3 from '../img/Property 1=Variant3.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { id: 1, content: img1, type: "image", bgColor: "bg-red-500" },
    { id: 2, content: img2, type: "image", bgColor: "bg-red-500" },
    { id: 3, content: img3, type: "image", bgColor: "bg-red-500" },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="overflow-hidden h-[165.376px] w-full sm:w-[85%] lg:w-[95%] mx-auto relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              slide.bgColor
            } ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-full h-[200px] sm:h-full flex items-center justify-center">
              {slide.type === "image" ? (
                <img src={slide.content} alt={`Slide ${slide.id}`} className="h-full w-auto" />
              ) : (
                <div className="text-white">{slide.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* newsslider */}
      <div className="flex items-center justify-center mt-4 px-2 sm:px-4 lg:px-10">
        <div className="bg-red-500 p-2 mx-auto flex items-center w-full h-[66px] ">
          <button className="px-2 sm:px-4 py-2 bg-black text-white rounded mr-2 lg:mr-4">
            Headlines
          </button>
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <p className="animate-marquee text-sm sm:text-base lg:text-lg font-semibold ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
