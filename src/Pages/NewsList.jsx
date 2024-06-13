// NewsList.js featching data from api

import React, { useState, useEffect } from 'react';
import NewsArticle from '../component/NewsArticle.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6541820ae8014b34b4235b1485af23a6');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className='font-semibold text-2xl text-center mt-16 pb-8'>Latest News</h1>
      {articles.length > 0 ? (
        <Slider {...settings}>
          {articles.map((article, index) => (
            <NewsArticle key={index} article={article} />
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsList;







