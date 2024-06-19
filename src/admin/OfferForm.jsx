






// // import React, { useState } from 'react';

// // const OfferForm = () => {
// //   const [offers, setOffers] = useState([]);
// //   const [offerText, setOfferText] = useState('');
// //   const [editIndex, setEditIndex] = useState(null);
// //   const [formErrors, setFormErrors] = useState({});

// //   const handleOfferChange = (e) => {
// //     setOfferText(e.target.value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     let errors = {};
// //     if (!offerText.trim()) {
// //       errors.offerText = 'Offer details are required.';
// //     }

// //     if (Object.keys(errors).length === 0) {
// //       if (editIndex !== null) {
// //         const updatedOffers = offers.map((offer, index) =>
// //           index === editIndex ? offerText : offer
// //         );
// //         setOffers(updatedOffers);
// //         setEditIndex(null);
// //       } else {
// //         setOffers([...offers, offerText]);
// //       }
// //       setOfferText('');
// //       setFormErrors({});
// //     } else {
// //       setFormErrors(errors);
// //     }
// //   };

// //   const handleEdit = (index) => {
// //     setOfferText(offers[index]);
// //     setEditIndex(index);
// //   };

// //   const handleDelete = (index) => {
// //     const updatedOffers = offers.filter((_, i) => i !== index);
// //     setOffers(updatedOffers);
// //     setEditIndex(null);
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h2 className="text-2xl font-bold mb-4 text-center">Manage Offers</h2>
// //       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
// //         <div className="mb-4">
// //           <label htmlFor="offer" className="block text-gray-700 font-semibold mb-2">
// //             Offer Details:
// //           </label>
// //           <textarea
// //             id="offer"
// //             value={offerText}
// //             onChange={handleOfferChange}
// //             className="w-full p-2 border border-gray-300 rounded-lg"
// //             rows="3"
// //           />
// //           {formErrors.offerText && <p className="text-red-600">{formErrors.offerText}</p>}
// //         </div>
// //         <div className="flex justify-end">
// //           <button
// //             type="submit"
// //             className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
// //           >
// //             {editIndex !== null ? 'Update Offer' : 'Add Offer'}
// //           </button>
// //         </div>
// //       </form>
// //       <div className="mt-8">
// //         {offers.length > 0 ? (
// //           <ul className="list-disc pl-5">
// //             {offers.map((offer, index) => (
// //               <li key={index} className="mb-2 flex justify-between items-center">
// //                 <span>{offer}</span>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => handleEdit(index)}
// //                     className="px-2 py-1 bg-yellow-400 text-white rounded-lg"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => handleDelete(index)}
// //                     className="px-2 py-1 bg-red-500 text-white rounded-lg"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-600 text-center">No offers available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OfferForm;

































// import React from 'react';

// const OfferForm = ({ offers, setOffers, offerText, setOfferText, editIndex, setEditIndex }) => {
//   const handleOfferChange = (e) => {
//     setOfferText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let errors = {};
//     if (!offerText.trim()) {
//       errors.offerText = 'Offer details are required.';
//     }

//     if (Object.keys(errors).length === 0) {
//       if (editIndex !== null) {
//         const updatedOffers = offers.map((offer, index) =>
//           index === editIndex ? offerText : offer
//         );
//         setOffers(updatedOffers);
//         setEditIndex(null);
//       } else {
//         setOffers([...offers, offerText]);
//       }
//       setOfferText('');
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   const handleEdit = (index) => {
//     setOfferText(offers[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedOffers = offers.filter((_, i) => i !== index);
//     setOffers(updatedOffers);
//     setEditIndex(null);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Manage Offers</h2>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="offer" className="block text-gray-700 font-semibold mb-2">
//             Offer Details:
//           </label>
//           <textarea
//             id="offer"
//             value={offerText}
//             onChange={handleOfferChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             rows="3"
//           />
//           {formErrors.offerText && <p className="text-red-600">{formErrors.offerText}</p>}
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
//           >
//             {editIndex !== null ? 'Update Offer' : 'Add Offer'}
//           </button>
//         </div>
//       </form>
//       <div className="mt-8">
//         {offers.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {offers.map((offer, index) => (
//               <li key={index} className="mb-2 flex justify-between items-center">
//                 <span>{offer}</span>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="px-2 py-1 bg-yellow-400 text-white rounded-lg"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="px-2 py-1 bg-red-500 text-white rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600 text-center">No offers available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OfferForm;


































import React, { useState } from 'react';

const OfferForm = ({ offers, setOffers, offerText, setOfferText, editIndex, setEditIndex }) => {
  const [formErrors, setFormErrors] = useState({});

  const handleOfferChange = (e) => {
    setOfferText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!offerText.trim()) {
      errors.offerText = 'Offer details are required.';
    }

    if (Object.keys(errors).length === 0) {
      if (editIndex !== null) {
        const updatedOffers = offers.map((offer, index) =>
          index === editIndex ? offerText : offer
        );
        setOffers(updatedOffers);
        setEditIndex(null);
      } else {
        setOffers([...offers, offerText]);
      }
      setOfferText('');
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const handleEdit = (index) => {
    setOfferText(offers[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedOffers = offers.filter((_, i) => i !== index);
    setOffers(updatedOffers);
    setEditIndex(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold m-8 text-gray-700 text-center">Create Offers</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="offer" className="block text-gray-700 font-semibold mb-2">
            Offer Details:
          </label>
          <textarea
            id="offer"
            value={offerText}
            onChange={handleOfferChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="3"
          />
          {formErrors.offerText && <p className="text-red-600">{formErrors.offerText}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2    bg-red-800 text-white rounded-lg shadow-md   shadow-gray-500"
          >
            {editIndex !== null ? 'Update Offer' : 'Add Offer'}
          </button>
        </div>
      </form>
      <div className="mt-8 ">
        {offers.length > 0 ? (
          <ul className="list-disc pl-5">
            {offers.map((offer, index) => (
              <li key={index} className="mb-2 flex  p-4 rounded-lg shadow shadow-gray-600 justify-between items-center">
                <span>{offer}</span>
                <div className="flex  space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-1 bg-yellow-400 text-white rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No offers available.</p>
        )}
      </div>
    </div>
  );
};

export default OfferForm;
