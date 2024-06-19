// after news  slider

import { IoIosThumbsUp } from "react-icons/io";
import img1 from "../img/Ellipse 5.png";


const Section2 = () => {
  return (
    <div className="flex flex-col mx-8 mt-16 mb-16 justify-center items-center">
      <h1 className="font-semibold   text-xl mb-10">Customers</h1>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start text-center    w-full">
        {/* 1 */}
        <div className="relative flex flex-col items-center mt-16 w-full lg:w-1/3 p-4">
          <div className="relative w-full">
            <img
              src={img1}
              alt="error"
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] z-10"
            />
            <div className="  mb-4 cursor-pointer shadow shadow-gray-500 hover:shadow-2xl hover:shadow-gray-400 mt-2 bg-gray-300 p-8 rounded-[112px] transition-transform duration-300 transform hover:scale-y-110 origin-top z-0 relative group">
              <h1>
                Getting no satisfaction from Newspapers.com Support, I took my
                computer to a shop and had it checked out.
              </h1>
              <IoIosThumbsUp className="thumbs-up" />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="relative flex flex-col items-center mt-16 w-full lg:w-1/3 p-4">
          <div className="relative w-full">
            <img
              src={img1}
              alt="error"
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] z-10"
            />
            <div className="  mb-4 cursor-pointer shadow shadow-gray-500 hover:shadow-2xl hover:shadow-gray-400 mt-2 bg-gray-300 p-8 rounded-[112px] transition-transform duration-300 transform hover:scale-y-110 origin-top z-0 relative group">
              <h1>
                Getting no satisfaction from Newspapers.com Support, I took my
                computer to a shop and had it checked out.
              </h1>
              <IoIosThumbsUp className="thumbs-up" />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="relative flex flex-col items-center mt-16 w-full lg:w-1/3 p-4">
          <div className="relative w-full">
            <img
              src={img1}
              alt="error"
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] z-10"
            />
            <div className="cursor-pointer  mb-4 shadow shadow-gray-500 hover:shadow-2xl hover:shadow-gray-400 mt-2 bg-gray-300 p-8 rounded-[112px] transition-transform duration-300 transform hover:scale-y-110 origin-top z-0 relative group">
              <h1>
                Getting no satisfaction from Newspapers.com Support, I took my
                computer to a shop and had it checked out.
              </h1>
              <IoIosThumbsUp className="thumbs-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
