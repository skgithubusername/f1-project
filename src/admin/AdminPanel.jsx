
// 
import React, { useState } from 'react';
import AdsBannerForm from './AdsBannerForm';
import OfferForm from './OfferForm';
import DataEntryForm from './DataEntryForm';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('adsBanner');

  // State for AdsBannerForm
  const [adsBannerImages, setAdsBannerImages] = useState([]);

  // State for OfferForm
  const [offers, setOffers] = useState([]);
  const [offerText, setOfferText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // State for DataEntryForm
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

  const renderContent = () => {
    switch (activeTab) {
      case 'adsBanner':
        return (
          <AdsBannerForm
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'offers':
        return (
          <OfferForm
            offers={offers}
            setOffers={setOffers}
            offerText={offerText}
            setOfferText={setOfferText}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
        );
      case 'dataEntry':
        return (
          <DataEntryForm
            category={category}
            setCategory={setCategory}
            data={data}
            setData={setData}
            submissions={submissions}
            setSubmissions={setSubmissions}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold  mt-6 mb-10">Admin Panel</h1>
      <div className="mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('adsBanner')}
            className={`px-6 py-2 font-semibold rounded-lg ${
              activeTab === 'adsBanner' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Ads Banner
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`px-12 py-2 font-semibold rounded-lg ${
              activeTab === 'offers' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Offers
          </button>
          <button
            onClick={() => setActiveTab('dataEntry')}
            className={`px-6 py-2 font-semibold rounded-lg ${
              activeTab === 'dataEntry' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Category Data 
          </button>
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;















