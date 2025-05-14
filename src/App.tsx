import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/MainHomePage/home';
import Intro from './Page/IntroWebSite/Intro';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introWeb" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
