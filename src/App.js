

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './Pages/Login';
import NewsPaper from './Pages/Newspaper'
import Magazine from './Pages/Magazine'
import Publication from './Pages/Publication'
import Cart from './Pages/Cart';
import Cart2 from './Pages/Cart2';
import Cart3 from './Pages/Cart3';
import Buy from './Pages/Buy';

import AdminPanel from './admin/AdminPanel';





function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/newspaper" element={<NewsPaper />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart3" element={<Cart3/>} />
        <Route path="/cart2" element={<Cart2 />} />

      </Routes>
    </Router>


  //  <>
  //  <AdminPanel/>
  //  </>

  
  
  );
}

export default App;
