// add to cart







import React, { useState } from 'react';
import { GoCircle } from 'react-icons/go';
import img1 from "../img/Rectangle 48.png";
import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';

function Cart({ onNext }) {
  const [items, setItems] = useState([
    { id: 1, quantity: 1, price: 1234, subscription: { option: null, price: 0 } },
    { id: 2, quantity: 1, price: 1234, subscription: { option: null, price: 0 } },
    { id: 3, quantity: 1, price: 1234, subscription: { option: null, price: 0 } },
  ]);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const handleSubscriptionChange = (index, option) => {
    const newItems = [...items];
    const price = option === 'Monthly' ? 100 : option === 'Yearly' ? 1000 : 0;
    newItems[index].subscription = { option, price };
    setItems(newItems);
  };

  const calculateItemTotal = (item) => {
    const itemTotal = item.price * item.quantity;
    const subscriptionPrice = item.subscription.price || 0;
    return itemTotal + subscriptionPrice;
  };

  const totalAmount = items.reduce((total, item) => total + calculateItemTotal(item), 0);

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
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between mb-6">
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-24 lg:w-32 mb-4 sm:mb-0">
                    <img className="w-full rounded-md shadow-lg" src={img1} alt="item" />
                  </div>
                  {/* Item Details */}
                  <div className="flex-grow sm:ml-4">
                    <p className="text-lg font-medium text-gray-700">Science Edition</p>
                    <div className="flex items-center mt-2">
                      {/* Quantity Selector */}
                      <button 
                        className="text-gray-500 hover:text-gray-800 focus:outline-none" 
                        onClick={() => handleIncrease(index)}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </button>
                      <span className="text-lg font-semibold mx-4">{item.quantity}</span>
                      <button 
                        className="text-gray-500 hover:text-gray-800 focus:outline-none" 
                        onClick={() => handleDecrease(index)}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Dropdown and Price */}
                  <div className="w-full sm:w-auto sm:ml-8 mt-4 sm:mt-0">
                    <Dropdown onSelect={(option) => handleSubscriptionChange(index, option)} />
                    <p className="text-red-500 text-lg font-semibold mt-4">₹{calculateItemTotal(item)}</p>
                    {/* Show subscription price if selected */}
                    {item.subscription.option && (
                      <p className="text-sm text-gray-600 mt-1">+ Subscription ({item.subscription.option}): ₹{item.subscription.price}</p>
                    )}
                  </div>
                  {/* Total Amount for the Item */}
                  <div className="text-lg ml-8 lg:ml-56 font-semibold mt-4">
                    Total: ₹{calculateItemTotal(item)}
                  </div>
                </div>
              ))}
            </div>
            {/* Total Amount and Proceed Button */}
            <div className="flex items-center justify-between border-t pt-6">
              <h1 className="text-lg font-semibold text-gray-700">Total Amount</h1>
              <p className="text-lg font-semibold text-red-500">₹{totalAmount}</p>
            </div>
            <div className=' flex  justify-center items-center'>
           <Link
            to="/cart3"
            className="block lg:w-1/2  mt-12 sm:w-64  bg-red-500 text-white py-3 px-3 rounded-lg shadow-md hover:bg-red-600 focus:outline-none text-center"
          >
            Proceed to Checkout
          </Link>
           </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
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
