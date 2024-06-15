



import React from "react";
import { GoCircle } from "react-icons/go";
import img1 from "../img/Rectangle 48.png";
import Dropdown from "./Dropdown";

function Cart() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row">

        {/* Left Section */}
        <div className="lg:w-3/4 bg-white shadow-lg rounded-lg mb-8 lg:mb-0">
          {/* Progress Indicator */}
          <div className="border-b-2 border-gray-200 px-6 py-4">
            <ol className="flex justify-between">
              <li className="flex items-center">
                <span className="mr-2">
                  <GoCircle className="text-red-500" />
                </span>
                Cart
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">
                  <GoCircle />
                </span>
                Checkout
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">
                  <GoCircle />
                </span>
                Successful
              </li>
            </ol>
          </div>

          {/* Order Summary */}
          <div className="px-6 lg:rounded-2xl bg-slate-300 text-black py-8">
            <h1 className="text-2xl font-semibold text-white mb-6">Order Summary</h1>

            {/* Items */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">ITEMS</h2>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center mb-6">
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-24 lg:w-32">
                    <img className="w-full rounded-md shadow-lg" src={img1} alt="item" />
                  </div>
                  {/* Item Details */}
                  <div className="flex-grow ml-4">
                    <p className="text-lg font-medium text-gray-700">Science Edition</p>
                    <div className="flex items-center mt-2">
                      {/* Quantity Selector */}
                      <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </button>
                      <span className="text-lg font-semibold mx-4">1</span>
                      <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Dropdown and Price */}
                  <div className="ml-4 md:ml-8">
                    <Dropdown />
                    <p className="text-red-500 text-lg font-semibold mt-4">₹1234</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Amount and Proceed Button */}
            <div className="flex items-center justify-between border-t pt-6">
              <h1 className="text-lg font-semibold text-gray-700">Total Amount</h1>
              <p className="text-lg font-semibold text-red-500">₹3702</p>
            </div>
            <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Proceed to Checkout</button>
          </div>
        </div>

        {/* Right Section - Order History */}
        <div className="lg:w-1/4 bg-red-900 shadow-lg rounded-lg px-6 py-8">
          <h1 className="text-xl font-semibold text-gray-300 mb-6">Order History</h1>
          {/* Dummy Order History Items */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="ml-4">
                <div className="w-20 h-4 bg-gray-200 mb-2"></div>
                <div className="w-16 h-4 bg-gray-200"></div>
                <button className="bg-red-500 text-white rounded-lg px-4 py-1 mt-4 block">Repeat Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="bg-slate-300 shadow-lg rounded-lg mt-8 px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Suggestions</h1>
        {/* Grid Layout for Suggestions */}
        <div className="grid grid-cols-2 gap-8">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Suggestion Image */}
              <img className="w-48 h-48 rounded-md shadow-lg mb-4" src={img1} alt="suggestion" />
              {/* Suggestion Details */}
              <div className="text-center">
                <p className="text-lg font-medium text-gray-800">Science Edition</p>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
