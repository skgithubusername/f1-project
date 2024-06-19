
// final section in cart after payment


import { GoCircle } from "react-icons/go";
import img1 from "../img/Rectangle 48.png";

function Cart2() {
  return (
    <div className="p-6  max-w-5xl mx-auto space-y-8  text-black">
      {/* Stepper */}
      <div className="border-b-2 border-gray-300 px-6 py-4 mb-6">
        <ol className="flex justify-between text-sm md:text-base">
          <li className="flex items-center">
            <span className="mr-2">
              <GoCircle className="text-red-500" />
            </span>
            <span className="font-semibold text-red-500">Cart</span>
          </li>
          <li className="flex items-center text-gray-400">
            <span className="mr-2">
              <GoCircle className="text-gray-400" />
            </span>
            <span>Checkout</span>
          </li>
          <li className="flex items-center text-gray-400">
            <span className="mr-2">
              <GoCircle className="text-gray-400" />
            </span>
            <span>Successful</span>
          </li>
        </ol>
      </div>

      {/* Order Summary */}
      <div className="bg-red-900 p-8 rounded-lg shadow-lg   shadow-gray-400">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Order Summary</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Delivery Address</h2>
              <p className="text-gray-200">123 Main Street, City, State, ZIP</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Phone</h2>
              <p className="text-gray-200">+91xxxxxxxxxx</p>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col space-y-4">
            {[1, 2].map((_, index) => (
              <div key={index} className="flex  shadow-red-600 shadow-md p-2 bg-red-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  className="w-[150px] h-[150px] object-cover"
                  src={img1}
                  alt="item"
                />
                <div className="p-4 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold text-red-400">Amar Ujala</h2>
                  <p className="text-gray-300">Newspaper</p>
                  <p className="text-gray-300">Price: $XX.XX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Confirmation */}
      <div className="bg-gray-300 shadow-gray-400 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-white">
        <div className="flex items-center md:items-start">
          <img
            className="w-[200px] h-[200px] rounded-md shadow-lg"
            src={img1}
            alt="item"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-red-800">Amar Ujala</h2>
            <p className="text-gray-300">Newspaper</p>
            <p className="text-gray-300">Price: $XX.XX</p>
          </div>
        </div>

        {/* Order Steps */}
        <div className="flex flex-col text-black justify-center items-center">
          <div className="flex mt-16 items-center justify-center mb-4 space-x-2 md:space-x-4">
            <p className="mx-2 text-red-700 font-semibold">Order Confirmed</p>
            <p className="mx-2 text-red-700 font-semibold">Order Confirmed</p>
            <p className="mx-2 text-red-700 font-semibold">Order Confirmed</p>
          </div>
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            <GoCircle className="text-red-700 rounded-full" />
            <hr className="bg-red-700 h-[2px] w-[40px] md:w-[100px]" />
            <GoCircle className="text-red-700 rounded-full" />
            <hr className="bg-red-700 h-[2px] w-[40px] md:w-[100px]" />
            <GoCircle className="text-red-700 rounded-full" />
            <hr className="bg-red-700 h-[2px] w-[40px] md:w-[100px]" />
            <GoCircle className="text-red-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart2;


































// import React from 'react';
// import { GoCircle } from 'react-icons/go';

// function Cart2({ onPrevious }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-1">
//         {/* Stepper */}
//         <div className="border-b-2 border-gray-300 px-6 py-4 mb-6">
//           <ol className="flex justify-between text-sm md:text-base">
//             <li className="flex items-center">
//               <span className="mr-2">
//                 <GoCircle className="text-red-500" />
//               </span>
//               <span className="font-semibold text-red-500">Cart</span>
//             </li>
//             <li className="flex items-center">
//               <span className="mr-2">
//                 <GoCircle className="text-red-500" />
//               </span>
//               <span className="font-semibold text-red-500">Checkout</span>
//             </li>
//             <li className="flex items-center text-gray-400">
//               <span className="mr-2">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               <span className="font-semibold">Successful</span>
//             </li>
//           </ol>
//         </div>

//         <div className="container mx-auto px-4 py-8">
//           {/* Success Message */}
//           <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
//             <h1 className="text-4xl font-semibold text-gray-700 mb-4">Payment Successful!</h1>
//             <p className="text-lg text-gray-600">Thank you for your purchase.</p>
//           </div>

//           {/* Action Button */}
//           <div className="flex justify-center items-center mt-8">
//             <button onClick={onPrevious} className="bg-gray-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none">Back to Checkout</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Cart2;
