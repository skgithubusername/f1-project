



// import React, { useState } from 'react';

// const AdsBannerForm = () => {
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach(file => {
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImages(prevImages => [...prevImages, reader.result]);
//           console.log('Uploaded image:', reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     });
//   };

//   const handleDeleteImage = (imageSrc) => {
//     setImages(images.filter(src => src !== imageSrc));
//   };

//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         multiple
//         className="mb-4 file:mr-4 file:py-2 file:px-4
//                    file:rounded-full file:border-0
//                    file:text-sm file:font-semibold
//                    file:bg-violet-50 file:text-violet-700
//                    hover:file:bg-violet-100"
//       />
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
//         {images.map((src, index) => (
//           <div key={index} className="relative">
//             <img src={src} alt={`Uploaded ${index}`} className="w-full h-auto rounded-lg shadow-lg" />
//             <button 
//               onClick={() => handleDeleteImage(src)}
//               className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdsBannerForm;




















import React from 'react';

const AdsBannerForm = ({ images, setImages }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prevImages => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDeleteImage = (imageSrc) => {
    setImages(images.filter(src => src !== imageSrc));
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className=' text-xl font-bold m-8 text-gray-700 text-center'>Choose Images for Banner</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        className="mb-4 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-violet-50 file:text-violet-700
                   hover:file:bg-violet-100"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt={`Uploaded ${index}`} className="w-full h-auto rounded-lg shadow-lg" />
            <button 
              onClick={() => handleDeleteImage(src)}
              className="absolute w-6 text-center h-6 top-2 right-2 bg-red-500 text-white  rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsBannerForm;
