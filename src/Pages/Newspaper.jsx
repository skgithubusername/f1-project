
import Dropdown from './Dropdown';
import img1 from '../img/Rectangle 48.png';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

function Newspaper() {
  return (

  <>
  <Navbar/>
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Newspaper</h1>
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Repeated blocks */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="m-4 p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-50 object-cover rounded-t-lg" src={img1} alt="error" />
            <p className="mt-4 font-semibold">Science Edition</p>
            <button className="mt-2 bg-red-500 text-white py-1 px-6 rounded hover:bg-red-600 transition-colors duration-300">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>

  );
}

export default Newspaper;
