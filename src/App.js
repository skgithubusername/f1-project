

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './Pages/Login';
import NewsPaper from './Pages/Newspaper'
import Magazine from './Pages/Magazine'
import Publication from './Pages/Publication'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newspaper" element={<NewsPaper />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
    </Router>
  
  );
}

export default App;
