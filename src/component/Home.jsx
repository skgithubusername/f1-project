




// component/Home.jsx
import React from 'react';
import NewsList from '../Pages/NewsList';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Slider from './Slider';
import Connect from './Connect';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Header />
      <Section1 />
      <NewsList />
      <Section2 />
      <Connect/>
      <Footer />
    </div>
  );
};

export default Home;
