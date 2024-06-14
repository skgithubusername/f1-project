











// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="flex flex-col lg:flex-row m-4 space-y-4 lg:space-y-0 lg:space-x-4">
//       {/* left */}
//       <div className="flex flex-col w-full lg:w-4/5">
//         <div className="m-4">
//           <ol className="flex justify-between px-4 lg:px-12 text-lg font-semibold text-gray-700">
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-red-500" />
//               </span>
//               Cart
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Checkout
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Successful
//             </li>
//           </ol>
//         </div>

//         <div className="bg-white shadow-2xl rounded-lg p-6">
//           <h1 className="text-center text-2xl text-gray-800 font-semibold mb-6">
//             Order Summary
//           </h1>
//           <h2 className=" ml-20 text-xl font-semibold">ITEMS</h2>
//           {[1, 2, 3].map(( index) => (
//             <div key={index} className="flex flex-col md:flex-row items-center mb-6 border-b pb-4">
//               {/* item */}
//               <div className="flex items-center m-4 w-full md:w-1/3">
//                 <img className="w-[400px] h-[400px] mx-4 rounded-md shadow-xl" src={img1} alt="error" />
//                 <p className="text-lg font-medium text-gray-700">Science Edition</p>
//               </div>
//               {/* other */}
//               <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-12 w-full md:w-1/3">
//                 <h1 className="text-lg font-semibold text-gray-700">Quantity</h1>
//                 <div className="flex mt-2">
//                   <button className="cursor-pointer text-center text-white h-8 w-8 bg-gray-700 rounded-l-md shadow-lg">+</button>
//                   <p className="h-8 w-8 text-center bg-gray-200 mx-2 flex items-center justify-center">1</p>
//                   <button className="cursor-pointer text-white text-center h-8 w-8 bg-gray-700 rounded-r-md shadow-lg">-</button>
//                 </div>
//               </div>
//               {/* selector */}
//               <div className="flex flex-col mt-4 md:mt-0 md:ml-12 w-full md:w-1/3">
//                 <Dropdown />
//                 <p className="mt-4 bg-red-500 text-white lg:w-20  py-1 rounded-md text-center shadow-md">₹1234</p>
//               </div>
//             </div>
//           ))}
//           <div className="flex justify-between items-center mt-6">
//             <h1 className="font-semibold text-lg text-gray-800">Total Amount</h1>
//             <p className="h-8 w-[100px] text-center rounded-lg bg-gray-200 flex items-center justify-center shadow-md">₹3702</p>
//             <button className="bg-red-500 text-white px-8 py-2 rounded-md shadow-lg">Proceed</button>
//           </div>
//         </div>

//         {/* section 2 */}
//         <div className="bg-white shadow-2xl rounded-lg p-6 mt-4">
//           <h1 className="font-semibold text-xl text-gray-800 mb-6">Suggestions</h1>
//           <div className="flex flex-wrap justify-center">
//             {[1, 2].map(( index) => (
//               <div key={index} className="flex flex-col items-center m-4">
//                 <img className="w-48 h-48 rounded-md shadow-xl" src={img1} alt="error" />
//                 <div className="mt-4 text-center">
//                   <p className="text-lg font-medium text-gray-700">Science Edition</p>
//                   <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">Buy</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* right */}
//       <div className="w-full lg:w-1/5 bg-white shadow-2xl rounded-lg p-6">
//         <h1 className="text-gray-800 mb-6 text-xl font-semibold">Order History</h1>
//         {[1, 2, 3].map(( index) => (
//           <div key={index} className="flex mb-6">
//             <div className="bg-gray-300 w-24 h-24 border rounded-md shadow-md"></div>
//             <div className="ml-4">
//               <p className="bg-gray-300 mb-2 rounded h-4 w-40 shadow-md"></p>
//               <p className="bg-gray-300 w-24 rounded h-4 mb-3 shadow-md"></p>
//               <button className="bg-red-500 text-white rounded p-2 shadow-lg">Repeat Order</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;


























// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="flex flex-col lg:flex-row m-4 space-y-4 lg:space-y-0 lg:space-x-4">
//       {/* Left Section */}
//       <div className="flex flex-col w-full lg:w-4/5">
//         <div className="m-4">
//           <ol className="flex justify-between px-4 lg:px-12 text-lg font-semibold text-gray-700">
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-red-500" />
//               </span>
//               Cart
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Checkout
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Successful
//             </li>
//           </ol>
//         </div>

//         <div className="bg-white shadow-2xl rounded-lg p-6">
//           <h1 className="text-center text-2xl text-gray-800 font-semibold mb-6">
//             Order Summary
//           </h1>
//           <h2 className="ml-4 text-xl font-semibold">ITEMS</h2>
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="flex flex-col md:flex-row items-center mb-6 border-b pb-4">
//               {/* Item Image and Description */}
//               <div className="flex items-center m-4 w-full md:w-1/3">
//                 <img className="w-64 h-64 lg:w-80 lg:h-80 mx-4 rounded-md shadow-xl" src={img1} alt="item" />
//                 <p className="text-lg font-medium text-gray-700">Science Edition</p>
//               </div>
//               {/* Quantity Selector */}
//               <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-12 w-full md:w-1/3">
//                 <h1 className="text-lg font-semibold text-gray-700">Quantity</h1>
//                 <div className="flex mt-2">
//                   <button className="cursor-pointer text-center text-white h-8 w-8 bg-gray-700 rounded-l-md shadow-lg">+</button>
//                   <p className="h-8 w-8 text-center bg-gray-200 mx-2 flex items-center justify-center">1</p>
//                   <button className="cursor-pointer text-white text-center h-8 w-8 bg-gray-700 rounded-r-md shadow-lg">-</button>
//                 </div>
//               </div>
//               {/* Dropdown and Price */}
//               <div className="flex flex-col mt-4 md:mt-0 md:ml-12 w-full md:w-1/3">
//                 <Dropdown />
//                 <p className="mt-4 bg-red-500 text-white px-4 py-1 rounded-md text-center shadow-md text-sm">₹1234</p>
//               </div>
//             </div>
//           ))}
//           <div className="flex justify-between items-center mt-6">
//             <h1 className="font-semibold text-lg text-gray-800">Total Amount</h1>
//             <p className="h-8 w-[100px] text-center rounded-lg bg-gray-200 flex items-center justify-center shadow-md">₹3702</p>
//             <button className="bg-red-500 text-white px-8 py-2 rounded-md shadow-lg">Proceed</button>
//           </div>
//         </div>

//         {/* Suggestions Section */}
//         <div className="bg-white shadow-2xl rounded-lg p-6 mt-4">
//           <h1 className="font-semibold text-xl text-gray-800 mb-6">Suggestions</h1>
//           <div className="flex flex-wrap justify-center">
//             {[1, 2].map((_, index) => (
//               <div key={index} className="flex flex-col items-center m-4">
//                 <img className="w-48 h-48 rounded-md shadow-xl" src={img1} alt="suggestion" />
//                 <div className="mt-4 text-center">
//                   <p className="text-lg font-medium text-gray-700">Science Edition</p>
//                   <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">Buy</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Order History */}
//       <div className="w-full lg:w-1/5 bg-white shadow-2xl rounded-lg p-6">
//         <h1 className="text-gray-800 mb-6 text-xl font-semibold">Order History</h1>
//         {[1, 2, 3].map((_, index) => (
//           <div key={index} className="flex mb-6">
//             <div className="bg-gray-300 w-24 h-24 border rounded-md shadow-md"></div>
//             <div className="ml-4">
//               <p className="bg-gray-300 mb-2 rounded h-4 w-40 shadow-md"></p>
//               <p className="bg-gray-300 w-24 rounded h-4 mb-3 shadow-md"></p>
//               <button className="bg-red-500 text-white rounded p-2 shadow-lg">Repeat Order</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;


































// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="flex flex-col lg:flex-row m-4 space-y-4 lg:space-y-0 lg:space-x-4">
//       {/* Left Section */}
//       <div className="flex flex-col w-full lg:w-4/5">
//         <div className="m-4">
//           <ol className="flex justify-between px-4 lg:px-12 text-lg font-semibold text-gray-700">
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-red-500" />
//               </span>
//               Cart
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Checkout
//             </li>
//             <li className="flex items-center">
//               <span className="px-1">
//                 <GoCircle className="text-gray-400" />
//               </span>
//               Successful
//             </li>
//           </ol>
//         </div>

//         <div className="bg-white shadow-2xl rounded-lg p-6">
//           <h1 className="text-center text-2xl text-gray-800 font-semibold mb-6">
//             Order Summary
//           </h1>
//           <h2 className="ml-4 text-xl font-semibold">ITEMS</h2>
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="flex flex-col lg:flex-row items-center mb-6 border-b pb-4">
//               {/* Item Image and Description */}
//               <div className="flex items-center m-4 w-full lg:w-1/3">
//                 <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mx-4 rounded-md shadow-xl" src={img1} alt="item" />
//                 <p className="text-lg font-medium text-gray-700">Science Edition</p>
//               </div>
//               {/* Quantity Selector */}
//               <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-12 w-full lg:w-1/3">
//                 <h1 className="text-lg font-semibold text-gray-700">Quantity</h1>
//                 <div className="flex mt-2">
//                   <button className="cursor-pointer text-center text-white h-8 w-8 bg-gray-700 rounded-l-md shadow-lg">+</button>
//                   <p className="h-8 w-8 text-center bg-gray-200 mx-2 flex items-center justify-center">1</p>
//                   <button className="cursor-pointer text-white text-center h-8 w-8 bg-gray-700 rounded-r-md shadow-lg">-</button>
//                 </div>
//               </div>
//               {/* Dropdown and Price */}
//               <div className="flex flex-col mt-4 lg:mt-0 lg:ml-12 w-full lg:w-1/3">
//                 <Dropdown />
//                 <p className="mt-4 bg-red-500 lg:w-52 text-white px-2 py-1 rounded-md text-center shadow-md text-sm">₹1234</p>
//               </div>
//             </div>
//           ))}
//           <div className="flex justify-between items-center mt-6">
//             <h1 className="font-semibold text-lg text-gray-800">Total Amount</h1>
//             <p className="h-8 w-[100px] text-center rounded-lg bg-gray-200 flex items-center justify-center shadow-md">₹3702</p>
//             <button className="bg-red-500 text-white px-8 py-2 rounded-md shadow-lg">Proceed</button>
//           </div>
//         </div>

//         {/* Suggestions Section */}
//         <div className="bg-white shadow-2xl rounded-lg p-6 mt-4">
//           <h1 className="font-semibold text-xl text-gray-800 mb-6">Suggestions</h1>
//           <div className="flex flex-wrap justify-center">
//             {[1, 2].map((_, index) => (
//               <div key={index} className="flex flex-col items-center m-4">
//                 <img className="w-48 h-48 rounded-md shadow-xl" src={img1} alt="suggestion" />
//                 <div className="mt-4 text-center">
//                   <p className="text-lg font-medium text-gray-700">Science Edition</p>
//                   <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">Buy</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Order History */}
//       <div className="w-full lg:w-1/5 bg-white shadow-2xl rounded-lg p-6">
//         <h1 className="text-gray-800 mb-6 text-xl font-semibold">Order History</h1>
//         {[1, 2, 3].map((_, index) => (
//           <div key={index} className="flex mb-6">
//             <div className="bg-gray-300 w-24 h-24 border rounded-md shadow-md"></div>
//             <div className="ml-4">
//               <p className="bg-gray-300 mb-2 rounded h-4 w-40 shadow-md"></p>
//               <p className="bg-gray-300 w-24 rounded h-4 mb-3 shadow-md"></p>
//               <button className="bg-red-500 text-white rounded p-2 shadow-lg">Repeat Order</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;










































// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="container mx-auto px-4 lg:px-8 py-8">
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Section */}
//         <div className="lg:w-3/4 bg-white shadow-lg rounded-lg mb-8 lg:mb-0">
//           <div className="border-b-2 border-gray-200 px-6 py-4">
//             <ol className="flex justify-between">
//               <li className="flex items-center">
//                 <span className="mr-2">
//                   <GoCircle className="text-red-500" />
//                 </span>
//                 Cart
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Checkout
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Successful
//               </li>
//             </ol>
//           </div>

//           <div className="px-6 py-8">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h1>

//             <div className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">ITEMS</h2>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center mb-6">
//                   {/* Item Image and Description */}
//                   <div className="flex-shrink-0 w-24">
//                     <img className="w-full rounded-md shadow-lg" src={img1} alt="item" />
//                   </div>
//                   <div className="flex-grow ml-4">
//                     <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                     <div className="flex items-center mt-2">
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                         </svg>
//                       </button>
//                       <span className="text-lg font-semibold mx-4">1</span>
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   {/* Dropdown and Price */}
//                   <div className="ml-4">
//                     <Dropdown />
//                     <p className="text-red-500 text-lg font-semibold mt-4">₹1234</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center justify-between border-t pt-6">
//               <h1 className="text-lg font-semibold text-gray-800">Total Amount</h1>
//               <p className="text-lg font-semibold text-gray-800">₹3702</p>
//             </div>
//             <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Proceed</button>
//           </div>
//         </div>

//         {/* Right Section - Order History */}
//         <div className="lg:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8">
//           <h1 className="text-xl font-semibold text-gray-800 mb-6">Order History</h1>
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="flex items-center mb-6">
//               <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//               <div className="ml-4">
//                 <div className="w-20 h-4 bg-gray-200 mb-2"></div>
//                 <div className="w-16 h-4 bg-gray-200"></div>
//                 <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 block">Repeat Order</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggestions Section */}
//       <div className="bg-white shadow-lg rounded-lg mt-8 px-6 py-8">
//         <h1 className="text-xl font-semibold text-gray-800 mb-6">Suggestions</h1>
//         <div className="grid grid-cols-2 gap-8">
//           {[1, 2].map((_, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img className="w-48 h-48 rounded-md shadow-lg mb-4" src={img1} alt="suggestion" />
//               <div className="text-center">
//                 <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                 <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Buy</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;






















// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="container mx-auto px-4 lg:px-8 py-8">
//       <div className="flex flex-col lg:flex-row">

//         {/* Left Section */}
//         <div className="lg:w-3/4 bg-white shadow-lg rounded-lg mb-8 lg:mb-0">
//           {/* Progress Indicator */}
//           <div className="border-b-2 border-gray-200 px-6 py-4">
//             <ol className="flex justify-between">
//               <li className="flex items-center">
//                 <span className="mr-2">
//                   <GoCircle className="text-red-500" />
//                 </span>
//                 Cart
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Checkout
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Successful
//               </li>
//             </ol>
//           </div>

//           {/* Order Summary */}
//           <div className="px-6 py-8">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h1>

//             {/* Items */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">ITEMS</h2>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center mb-6">
//                   {/* Item Image */}
//                   <div className="flex-shrink-0 w-24">
//                     <img className="w-full rounded-md shadow-lg" src={img1} alt="item" />
//                   </div>
//                   {/* Item Details */}
//                   <div className="flex-grow ml-4">
//                     <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                     <div className="flex items-center mt-2">
//                       {/* Quantity Selector */}
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                         </svg>
//                       </button>
//                       <span className="text-lg font-semibold mx-4">1</span>
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   {/* Dropdown and Price */}
//                   <div className="ml-4">
//                     <Dropdown />
//                     <p className="text-red-500 text-lg font-semibold mt-4">₹1234</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Total Amount and Proceed Button */}
//             <div className="flex items-center justify-between border-t pt-6">
//               <h1 className="text-lg font-semibold text-gray-800">Total Amount</h1>
//               <p className="text-lg font-semibold text-red-500">₹3702</p>
//             </div>
//             <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Proceed to Checkout</button>
//           </div>
//         </div>

//         {/* Right Section - Order History */}
//         <div className="lg:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8">
//           <h1 className="text-xl font-semibold text-gray-800 mb-6">Order History</h1>
//           {/* Dummy Order History Items */}
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="flex items-center mb-6">
//               <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//               <div className="ml-4">
//                 <div className="w-20 h-4 bg-gray-200 mb-2"></div>
//                 <div className="w-16 h-4 bg-gray-200"></div>
//                 <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 block">Repeat Order</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggestions Section */}
//       <div className="bg-white shadow-lg rounded-lg mt-8 px-6 py-8">
//         <h1 className="text-xl font-semibold text-gray-800 mb-6">Suggestions</h1>
       
//         <div className="grid grid-cols-2 gap-8">
//           {[1, 2].map((_, index) => (
//             <div key={index} className="flex flex-col items-center">
         
//               <img className="w-48 h-48 rounded-md shadow-lg mb-4" src={img1} alt="suggestion" />
             
//               <div className="text-center">
//                 <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                 <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Buy Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;





















// import React from "react";
// import { GoCircle } from "react-icons/go";
// import img1 from "../img/Rectangle 48.png";
// import Dropdown from "./Dropdown";

// function Cart() {
//   return (
//     <div className="container mx-auto px-4 lg:px-8 py-8">
//       <div className="flex flex-col lg:flex-row">

//         {/* Left Section */}
//         <div className="lg:w-3/4 bg-white shadow-lg rounded-lg mb-8 lg:mb-0">
//           {/* Progress Indicator */}
//           <div className="border-b-2 border-gray-200 px-6 py-4">
//             <ol className="flex justify-between">
//               <li className="flex items-center">
//                 <span className="mr-2">
//                   <GoCircle className="text-red-500" />
//                 </span>
//                 Cart
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Checkout
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <span className="mr-2">
//                   <GoCircle />
//                 </span>
//                 Successful
//               </li>
//             </ol>
//           </div>

//           {/* Order Summary */}
//           <div className="px-6 py-8">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h1>

//             {/* Items */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">ITEMS</h2>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center mb-6">
//                   {/* Item Image */}
//                   <div className="flex-shrink-0 w-24">
//                     <img className="w-full rounded-md shadow-lg" src={img1} alt="item" />
//                   </div>
//                   {/* Item Details */}
//                   <div className="flex-grow ml-4">
//                     <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                     <div className="flex items-center mt-2">
//                       {/* Quantity Selector */}
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
// //                         </svg>
//                       </button>
//                       <span className="text-lg font-semibold mx-4">1</span>
//                       <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   {/* Dropdown and Price */}
//                   <div className="ml-4">
//                     <Dropdown />
//                     <p className="text-red-500 text-lg font-semibold mt-4">₹1234</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Total Amount and Proceed Button */}
//             <div className="flex items-center justify-between border-t pt-6">
//               <h1 className="text-lg font-semibold text-gray-800">Total Amount</h1>
//               <p className="text-lg font-semibold text-red-500">₹3702</p>
//             </div>
//             <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Proceed to Checkout</button>
//           </div>
//         </div>

//         {/* Right Section - Order History */}
//         <div className="lg:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8">
//           <h1 className="text-xl font-semibold text-gray-800 mb-6">Order History</h1>
//           {/* Dummy Order History Items */}
//           {[1, 2, 3].map((_, index) => (
//             <div key={index} className="flex items-center mb-6">
//               <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//               <div className="ml-4">
//                 <div className="w-20 h-4 bg-gray-200 mb-2"></div>
//                 <div className="w-16 h-4 bg-gray-200"></div>
//                 <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 block">Repeat Order</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggestions Section */}
//       <div className="bg-white shadow-lg rounded-lg mt-8 px-6 py-8">
//         <h1 className="text-xl font-semibold text-gray-800 mb-6">Suggestions</h1>
//         {/* Grid Layout for Suggestions */}
//         <div className="grid grid-cols-2 gap-8">
//           {[1, 2].map((_, index) => (
//             <div key={index} className="flex flex-col items-center">
//               {/* Suggestion Image */}
//               <img className="w-48 h-48 rounded-md shadow-lg mb-4" src={img1} alt="suggestion" />
//               {/* Suggestion Details */}
//               <div className="text-center">
//                 <p className="text-lg font-medium text-gray-800">Science Edition</p>
//                 <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Buy Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
























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
          <div className="px-6 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h1>

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
                    <p className="text-lg font-medium text-gray-800">Science Edition</p>
                    <div className="flex items-center mt-2">
                      {/* Quantity Selector */}
                      <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
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
                  <div className="ml-4">
                    <Dropdown />
                    <p className="text-red-500 text-lg font-semibold mt-4">₹1234</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Amount and Proceed Button */}
            <div className="flex items-center justify-between border-t pt-6">
              <h1 className="text-lg font-semibold text-gray-800">Total Amount</h1>
              <p className="text-lg font-semibold text-red-500">₹3702</p>
            </div>
            <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none">Proceed to Checkout</button>
          </div>
        </div>

        {/* Right Section - Order History */}
        <div className="lg:w-1/4 bg-white shadow-lg rounded-lg px-6 py-8">
          <h1 className="text-xl font-semibold text-gray-800 mb-6">Order History</h1>
          {/* Dummy Order History Items */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="ml-4">
                <div className="w-20 h-4 bg-gray-200 mb-2"></div>
                <div className="w-16 h-4 bg-gray-200"></div>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 block">Repeat Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="bg-white shadow-lg rounded-lg mt-8 px-6 py-8">
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
