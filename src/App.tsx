// import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/MainHomePage/home';
import Intro from './Page/IntroWebSite/Intro';
import './App.css';
import Info from './Page/Info/Info';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introWeb" element={<Intro />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
