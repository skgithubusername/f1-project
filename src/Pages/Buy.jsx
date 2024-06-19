
// when click buy item show there

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import img1 from '../img/Rectangle 48.png';
import { Link } from 'react-router-dom';

function Buy() {
  const [quantity, setQuantity] = useState(1); 
  const [subscription, setSubscription] = useState({ option: null, price: 0 });

 
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };


  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const totalAmount = 1234 * quantity + subscription.price; // Assuming product price is 1234

  return (
    <div className="container mx-auto px-4 lg:mt-28 lg:px-8  py-8">
      <div className="bg-white shadow-gray-600 shadow-lg rounded-lg p-6">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-6">
          <div className="flex-shrink-0 w-24 lg:w-32 mb-4 lg:mb-0">
            <img className="w-full rounded-md shadow-lg lg:ml-12" src={img1} alt="item" />
          </div>
          <div className="flex-grow lg:ml-40">
            <p className="text-lg font-medium text-gray-700">Science Edition</p>
            <div className="mt-4 flex items-center">
              {/* Quantity Selector */}
              <button 
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="text-lg font-semibold mx-4">{quantity}</span>
              <button 
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <Dropdown
              onSelect={(option) => {
                const price = option === 'Monthly' ? 100 : option === 'Yearly' ? 1000 : 0;
                setSubscription({ option, price });
              }}
            />
            <p className="text-red-500 text-lg font-semibold mt-2">₹1234</p> {/* Product price placeholder */}
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-6">
          <h1 className="text-lg font-semibold text-gray-700">Total Amount</h1>
          <p className="text-lg font-semibold text-red-500">₹{totalAmount}</p>
        </div>
        <div className="mt-8 lg:mt-12">
          <Link
            to="/cart3"
            className="block w-full  bg-red-500 text-white py-3 px-3 rounded-lg shadow-md hover:bg-red-600 focus:outline-none text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buy;
