// // // //  befor footer


// component/Connect.jsx
import React from 'react';
import img1 from '../img/Vector 2.png';

const Connect = () => {
  return (
    <div className="flex lg:flex-row bg-gray-300 m-4 rounded-lg px-6 lg:py-8 pb-4" style={{ borderTopRightRadius: '100px', borderBottomLeftRadius: '100px' }}>
      <div
        className="relative bg-gray-300 h-64 w-full lg:w-1/2 rounded-lg mb-4 lg:mb-0 hidden lg:block"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-white text-2xl text-center px-4">
            Subscribe now and get <span className="text-red-500">"Your World, Your News"</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center w-full">
          <div className="flex flex-col w-full lg:mr-4 items-center lg:items-start">
            <input type="text" placeholder="Name" className="bg-gray-700 mt-4 p-2 rounded text-white w-full lg:w-96 sm:w-3/4 text-center lg:text-left" />
            <input type="text" placeholder="Phone" className="bg-gray-700 mt-4 p-2 rounded text-white w-full lg:w-96 sm:w-3/4 text-center lg:text-left" />
            <textarea placeholder="Message" className="bg-gray-700 mt-4 p-2 rounded text-white w-full lg:w-96 sm:w-3/4 lg:h-20"></textarea>
          </div>
          <div className="mt-4 lg:mt-20  lg:mr-16 lg:self-start flex items-center justify-center w-full lg:w-auto">
            <button className="font-semibold text-lg rounded-md bg-black text-white px-6 py-3 w-full lg:w-auto sm:w-auto">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
