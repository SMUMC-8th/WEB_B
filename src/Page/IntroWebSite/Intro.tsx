// import React, { useState } from 'react';
import Navbar from '../MainHomePage/NavBar';
import Footer from '../MainHomePage/footer';
import IntroMain from './IntroMain';
import '../MainHomePage/main.css'; 

const Intro: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-[1440px] h-[1024px] mx-auto border-2 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-start mt-30">
        <IntroMain />
      </div>
      <Footer />
    </div>
  );
};

export default Intro;
