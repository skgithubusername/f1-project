// after slider


// component/Header.jsx
import React from 'react';
import img62 from '../img/Rectangle 62.png';
import img63 from '../img/Rectangle 63.png';

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 bg-gradient-to-r from-[#703A3A] to-[#D66F6F] p-2">
      <div className="md:ml-16 lg:ml-40 sm:mt-2 lg:mt-4 text-center md:text-left">
        <h1 className="text-lime-300 text-2xl md:text-3xl mt-12 sm:mt-4 w-full  lg:mt-28 md:w-96 mx-auto md:mx-0">
          #1 Selling Publication, Magazine and Newspaper of All Time
        </h1>
        <button className="mt-8 px-4 py-2 bg-white text-black rounded">
          Buy Newspaper
        </button>
      </div>
      <div className="relative mt-10 md:mt-2 lg:mt-12 flex justify-center">
        <div className="relative w-full max-w-[600px] mx-auto">
          <img
            className="h-auto w-full max-w-[300px] lg:max-w-[450px] mx-auto"
            alt="Rectangle 63"
            src={img63}
          />
          <img
            className="absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[500px] object-cover"
            alt="Rectangle 62"
            src={img62}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
