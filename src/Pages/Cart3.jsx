// cart3



import React, { useState } from 'react';
import { GoCircle } from 'react-icons/go';

function Cart3() {
  const [paymentOption, setPaymentOption] = useState('');

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-1 ">
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
        <div className=' px-4'>
            
        <h1 className="text-center text-xl text-gray-700 mb-4 underline cursor-pointer">Back</h1>


{/* Payment Section */}
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
  {/* Payment Details */}
  <div className=" mx-4 bg-red-900  shadow-red-800  p-8 rounded-lg shadow-lg mb-4 md:mb-0 md:w-1/2">
    <h1 className="text-center text-gray-100 font-semibold text-lg mb-6">Payment</h1>
    <div className="mb-4">
      <label htmlFor="cardNumber" className="block text-gray-300 mb-2">Card Number</label>
      <input type="text" id="cardNumber" className="w-full outline-none rounded-lg bg-gray-200 text-black px-4 py-2" />
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <div className="mb-4 md:mb-0">
        <label htmlFor="expiry" className="block text-gray-300 mb-2">Pin</label>
        <input type="text" id="expiry" className="w-full md:w-24 outline-none rounded-lg bg-gray-200 text-black px-4 py-2" />
      </div>
      <div className="mb-4 md:mb-0">
        <label htmlFor="cvv" className="block text-gray-300 mb-2">CVV</label>
        <input type="text" id="cvv" className="w-full md:w-24 outline-none rounded-lg bg-gray-200 text-black px-4 py-2" />
      </div>
     
    </div>
    <div className="mb-4">
      <label htmlFor="cardNumber" className="block text-gray-300 mb-2">Name(option)</label>
      <input type="text" id="cardNumber" className="w-full outline-none rounded-lg bg-gray-200 text-black px-4 py-2" />
    </div>
    <button className="w-full text-center text-white font-semibold bg-red-500 rounded-md py-2 mb-4">Pay Now</button>
    <h1 className="text-center text-gray-300 underline cursor-pointer">Cancel</h1>
  </div>

  {/* Payment Options */}
  <div className=" bg-red-900  shadow-red-800 p-8 rounded-lg shadow-lg md:w-1/2">
    <h1 className="font-semibold text-lg mb-4 text-gray-100 text-center">Payment Options</h1>
    <div className="flex flex-col space-y-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          className="hidden"
          name="paymentOption"
          value="cashOnDelivery"
          checked={paymentOption === 'cashOnDelivery'}
          onChange={() => handlePaymentOptionChange('cashOnDelivery')}
        />
        <div className={`w-4 h-4 border border-gray-300 rounded-full flex-none mr-2 cursor-pointer ${paymentOption === 'cashOnDelivery' ? 'bg-red-500 border-red-500' : ''}`}></div>
        <span className="text-gray-300">Cash on Delivery</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          className="hidden"
          name="paymentOption"
          value="upi"
          checked={paymentOption === 'upi'}
          onChange={() => handlePaymentOptionChange('upi')}
        />
        <div className={`w-4 h-4 border border-gray-300 rounded-full flex-none mr-2 cursor-pointer ${paymentOption === 'upi' ? 'bg-red-500 border-red-500' : ''}`}></div>
        <span className="text-gray-300">UPI</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          className="hidden"
          name="paymentOption"
          value="debitCreditCard"
          checked={paymentOption === 'debitCreditCard'}
          onChange={() => handlePaymentOptionChange('debitCreditCard')}
        />
        <div className={`w-4 h-4 border border-gray-300 rounded-full flex-none mr-2 cursor-pointer ${paymentOption === 'debitCreditCard' ? 'bg-red-500 border-red-500' : ''}`}></div>
        <span className="text-gray-300">Debit Card/Credit Card</span>
      </label>
    </div>
  </div>
</div>
        </div>
      </main>

    
    </div>
  );
}

export default Cart3;
