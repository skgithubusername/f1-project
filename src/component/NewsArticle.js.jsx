

import React from 'react';

const defaultImageUrl = 'https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/@@images/image.jpeg';

const NewsArticle = ({ article }) => {
  const imageUrl = article.urlToImage || defaultImageUrl;

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "80vh",
        position: "relative"
      }}
      className="flex flex-col items-center text-black rounded-3xl mb-8 m-4 p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10 w-full md:w-2/3 px-20  mt-40 text-white text-center"> 
        <h3 className="text-lg md:text-2xl font-bold mb-2">{article.title}</h3>
        <p className="text-sm md:text-base py-16 mb-4">{article.description}</p>
        <p className="text-xs md:text-sm ">{article.source.name}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
