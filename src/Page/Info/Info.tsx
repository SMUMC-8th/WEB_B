// import React, { useState } from 'react';
import Navbar from '../MainHomePage/NavBar';
import Footer from '../MainHomePage/footer';
import InfoMain from './InfoMain';
import '../MainHomePage/main.css'; 

const Info: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-[1440px] h-[1024px] mx-auto border-2 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-start mt-30 px-40">
        <InfoMain />
      </div>
      <Footer />
    </div>
  );
};

export default Info;