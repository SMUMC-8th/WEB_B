import React from 'react';
import NavBar from './NavBar';
import './main.css'; 
import Main from './main';
import Footer from './footer';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;