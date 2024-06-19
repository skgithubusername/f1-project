




import React, { useState } from 'react';

const DataEntryForm = () => {
  const [category, setCategory] = useState('Newspaper');
  const [data, setData] = useState({
    image: '',
    name: '',
    price: '',
    language: ''
  });
  const [submissions, setSubmissions] = useState({
    Newspaper: [],
    Magazines: [],
    Publication: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setData({ ...data, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedCategorySubmissions = [...submissions[category]];
      updatedCategorySubmissions[currentIndex] = data;
      setSubmissions({
        ...submissions,
        [category]: updatedCategorySubmissions
      });
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setSubmissions({
        ...submissions,
        [category]: [...submissions[category], data]
      });
    }
    setData({
      image: '',
      name: '',
      price: '',
      language: ''
    });
  };

  const handleEdit = (cat, index) => {
    setCategory(cat);
    setData(submissions[cat][index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (cat, index) => {
    const updatedCategorySubmissions = submissions[cat].filter((_, i) => i !== index);
    setSubmissions({
      ...submissions,
      [cat]: updatedCategorySubmissions
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-xl font-bold m-8 text-gray-700 text-center'>Enter section details</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Select Category:</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="Newspaper">Newspaper</option>
            <option value="Magazines">Magazines</option>
            <option value="Publication">Publication</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{category} Name:</label>
          <input type="text" id="name" name="name" value={data.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
          <input type="text" id="price" name="price" value={data.price} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language:</label>
          <input type="text" id="language" name="language" value={data.language} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="px-4 py-2  bg-red-800 shadow shadow-gray-600 text-white rounded-md  ">
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </form>

      {Object.keys(submissions).map((cat) => (
        <div key={cat} className="mt-8">
          <h2 className="text-xl font-bold mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {submissions[cat].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                {item.image && (
                  <div className="flex flex-col items-center mb-4">
                    <label className="font-medium text-gray-700">Image:</label>
                    <img src={item.image} alt="Uploaded" className="w-64 h-64 object-cover rounded-md shadow-md" />
                  </div>
                )}
                <div className="mb-2">
                  <label className="font-medium text-gray-700">Category:</label>
                  <p className="text-gray-900">{cat}</p>
                </div>
                <div className="mb-2">
                  <label className="font-medium text-gray-700">Name:</label>
                  <p className="text-gray-900">{item.name}</p>
                </div>
                <div className="mb-2">
                  <label className="font-medium text-gray-700">Price:</label>
                  <p className="text-gray-900">{item.price}</p>
                </div>
                <div className="mb-2">
                  <label className="font-medium text-gray-700">Language:</label>
                  <p className="text-gray-900">{item.language}</p>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button onClick={() => handleEdit(cat, index)} className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Edit</button>
                  <button onClick={() => handleDelete(cat, index)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataEntryForm;

















