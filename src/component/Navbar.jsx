// navbar
import { useState } from 'react';
import ToggleButton from '../Pages/ToggleButton';
import { MdNewspaper } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex shadow px-4 shadow-gray-400 mb-4 justify-between items-center p-4   sm:px-8">
        <div className="flex  items-center">
        <MdNewspaper className=' text-red-500 text-xl m-2' />
          <h1 className="cursor-pointer text-black font-inter text-lg  font-light   tracking-[0.3em] ">NewspaperWala</h1>
        </div>
        <div className="flex lg:hidden items-center">
          <ToggleButton />
          <button onClick={handleMenuToggle} className="ml-4">
         
           <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </button>
        </div>
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <div className="cursor-pointer flex items-center font-semibold gap-4 lg:gap-12 text-red-500">
            <h1>Newspaper</h1>
            <h1>Magazines</h1>
            <h1>Books</h1>
          </div>
        </div>
        <div className="hidden lg:flex items-center lg:gap-6">
          <ToggleButton />
        
         <Link to='/cart'>
         <svg className="cursor-pointer lg:w-10 lg:h-10 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path d="M11.4585 9.16666H14.896L20.6252 36.6667M20.6252 36.6667H38.9585M20.6252 36.6667C19.4096 36.6667 18.2438 37.1495 17.3843 38.0091C16.5247 38.8686 16.0418 40.0344 16.0418 41.25C16.0418 42.4656 16.5247 43.6314 17.3843 44.4909C18.2438 45.3504 19.4096 45.8333 20.6252 45.8333C21.8407 45.8333 23.0065 45.3504 23.8661 44.4909C24.7256 43.6314 25.2085 42.4656 25.2085 41.25C25.2085 40.0344 24.7256 38.8686 23.8661 38.0091C23.0065 37.1495 21.8407 36.6667 20.6252 36.6667ZM38.9585 36.6667C37.7429 36.6667 36.5771 37.1495 35.7176 38.0091C34.858 38.8686 34.3752 40.0344 34.3752 41.25C34.3752 42.4656 34.858 43.6314 35.7176 44.4909C36.5771 45.3504 37.7429 45.8333 38.9585 45.8333C40.1741 45.8333 41.3399 45.3504 42.1994 44.4909C43.0589 43.6314 43.5418 42.4656 43.5418 41.25C43.5418 40.0344 43.0589 38.8686 42.1994 38.0091C41.3399 37.1495 40.1741 36.6667 38.9585 36.6667ZM19.4793 29.7917H40.6772L43.5418 16.0417H16.7568" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg></Link>
          <Link to='/login' className="flex h-9 p-2.5 justify-center items-center gap-2.5 bg-red-500 text-white rounded-xl ml-2 font-semibold">Login</Link>
        </div>
      </div>
      
      {/* Blurred background overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleMenuClose}
      ></div>
      
      <div
        className={`fixed top-0 left-0 h-screen w-[200px] bg-white z-50 transform transition-transform duration-300 flex flex-col justify-between ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="relative flex-1 flex flex-col">
          <button onClick={handleMenuClose} className="absolute top-4 right-4">
            {/* <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> */}
          
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
          <div className="flex flex-col p-4 mt-12">
            <a href="#" className="text-red-500 font-semibold py-2">Newspaper</a>
            <a href="#" className="text-red-500 font-semibold py-2">Magazines</a>
            <a href="#" className="text-red-500 font-semibold py-2">Books</a>
          </div>
        </div>
        <div className="flex lg:flex-col  items-center  p-4">
          {/* <svg className="cursor-pointer w-8 h-8 mb-4" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path d="M11.4585 9.16666H14.896L20.6252 36.6667M20.6252 36.6667H38.9585M20.6252 36.6667C19.4096 36.6667 18.2438 37.1495 17.3843 38.0091C16.5247 38.8686 16.0418 40.0344 16.0418 41.25C16.0418 42.4656 16.5247 43.6314 17.3843 44.4909C18.2438 45.3504 19.4096 45.8333 20.6252 45.8333C21.8407 45.8333 23.0065 45.3504 23.8661 44.4909C24.7256 43.6314 25.2085 42.4656 25.2085 41.25C25.2085 40.0344 24.7256 38.8686 23.8661 38.0091C23.0065 37.1495 21.8407 36.6667 20.6252 36.6667ZM38.9585 36.6667C37.7429 36.6667 36.5771 37.1495 35.7176 38.0091C34.858 38.8686 34.3752 40.0344 34.3752 41.25C34.3752 42.4656 34.858 43.6314 35.7176 44.4909C36.5771 45.3504 37.7429 45.8333 38.9585 45.8333C40.1741 45.8333 41.3399 45.3504 42.1994 44.4909C43.0589 43.6314 43.5418 42.4656 43.5418 41.25C43.5418 40.0344 43.0589 38.8686 42.1994 38.0091C41.3399 37.1495 40.1741 36.6667 38.9585 36.6667ZM19.4793 29.7917H40.6772L43.5418 16.0417H16.7568" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> */}
          <Link to='/cart'>
          
          <svg className="cursor-pointer w-8 h-8 mb-4" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path d="M11.4585 9.16666H14.896L20.6252 36.6667M20.6252 36.6667H38.9585M20.6252 36.6667C19.4096 36.6667 18.2438 37.1495 17.3843 38.0091C16.5247 38.8686 16.0418 40.0344 16.0418 41.25C16.0418 42.4656 16.5247 43.6314 17.3843 44.4909C18.2438 45.3504 19.4096 45.8333 20.6252 45.8333C21.8407 45.8333 23.0065 45.3504 23.8661 44.4909C24.7256 43.6314 25.2085 42.4656 25.2085 41.25C25.2085 40.0344 24.7256 38.8686 23.8661 38.0091C23.0065 37.1495 21.8407 36.6667 20.6252 36.6667ZM38.9585 36.6667C37.7429 36.6667 36.5771 37.1495 35.7176 38.0091C34.858 38.8686 34.3752 40.0344 34.3752 41.25C34.3752 42.4656 34.858 43.6314 35.7176 44.4909C36.5771 45.3504 37.7429 45.8333 38.9585 45.8333C40.1741 45.8333 41.3399 45.3504 42.1994 44.4909C43.0589 43.6314 43.5418 42.4656 43.5418 41.25C43.5418 40.0344 43.0589 38.8686 42.1994 38.0091C41.3399 37.1495 40.1741 36.6667 38.9585 36.6667ZM19.4793 29.7917H40.6772L43.5418 16.0417H16.7568" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </Link>
          <Link to="/login" className="flex h-9 p-2.5 justify-center items-center gap-2.5 bg-red-500 text-white rounded-xl ml-2 font-semibold">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
















