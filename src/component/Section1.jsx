// section1 after header

import img1 from "../img/pngimg 1 (3).png";
import img2 from "../img/pngimg 1 (1).png";
import img3 from "../img/pngimg 1 (2).png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="bg-section-bg bg-cover bg-center">
      <div className="flex flex-col  mb-8 justify-center items-center mt-4 p-4">
        <button className="px-2 sm:p-2 rounded-md text-red-500 font-semibold mr-6 bg-gradient-to-r from-yellow-300 via-lime-200 to-lime-300 ">
          Offer Available
        </button>
        <h1 className="text-red-500 text-xl text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore praesentium numquam, architecto cum, aut facilis blanditiis voluptates totam delectus ullam, ab pariatur quasi porro natus minima voluptas! Corporis, optio?</h1>
      </div>

      {/* box */}
      <div className="p-4 flex flex-col lg:flex-row items-center justify-center">
        {/* box1 */}
        <Link to="/newspaper" className="relative lg:mx-20 mb-8 cursor-pointer group">
          <img
            src={img1}
            alt="error"
            className="absolute mt-8 top-0 left-0 w-[100%] h-[200px] transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-105"
          />
          <div className="mt-[100px] box text-white pl-16 flex justify-center items-center rounded-[35px] bg-neutral-700 p-5 w-[250px] h-[280px] transition-background-color duration-1000 ease-in-out group-hover:bg-[rgb(158, 208, 98)] group-hover:text-black">
            <span className="font-semibold text-xl mt-12">Newspaper</span>
            <p className="text-lime-400 mt-44 transition-colors duration-500 ease-in-out group-hover:text-black">
              More
            </p>
          </div>
        </Link>
        {/* box2 */}
        <Link to="/magazine" className="relative lg:mx-20 mb-8 cursor-pointer group">
          <img
            src={img2}
            alt="error"
            className="absolute mt-8 top-0 left-0 w-[870px] h-[220px] transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-105"
          />
          <div className="mt-[100px] box text-white pl-16 flex justify-center items-center rounded-[35px] bg-neutral-700 p-5 w-[250px] h-[280px] transition-background-color duration-1000 ease-in-out group-hover:bg-[rgb(158, 208, 98)] group-hover:text-black">
            <span className="font-semibold text-xl mt-12">Magazine</span>
            <p className="text-lime-400 mt-44 transition-colors duration-500 ease-in-out group-hover:text-black">
              More
            </p>
          </div>
        </Link>
        {/* box3 */}
        <Link to="publication" className="relative lg:mx-20 mb-8 cursor-pointer group">
          <img
            src={img3}
            alt="error"
            className="absolute mt-8 top-0 left-0 w-[870px] h-[220px] transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-105"
          />
          <div className="mt-[100px] box text-white pl-16 flex justify-center items-center rounded-[35px] bg-neutral-700 p-5 w-[250px] h-[280px] transition-background-color duration-1000 ease-in-out group-hover:bg-[rgb(158, 208, 98)] group-hover:text-black">
            <span className="font-semibold text-xl mt-12">Publication</span>
            <p className="text-lime-400 mt-44 transition-colors duration-500 ease-in-out group-hover:text-black">
              More
            </p>
          </div>
        </Link>
        {/* end */}
      </div>
    </div>
  );
};

export default Section1;





















































