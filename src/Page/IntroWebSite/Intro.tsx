// import React, { useState } from 'react';
import Navbar from '../MainHomePage/NavBar';
import Footer from '../MainHomePage/footer';
import IntroMain from './IntroMain';
import '../MainHomePage/main.css'; 

const Intro: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-screen mx-auto flex flex-col">
      <Navbar />
      <div className="w-full h-[75vh] flex-grow flex flex-col items-center justify-center gap-15">
        <IntroMain />
      </div>
      <Footer />
    </div>
  );
};

export default Intro;
