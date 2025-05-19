// import React, { useState } from 'react';
import Navbar from '../MainHomePage/NavBar';
import Footer from '../MainHomePage/footer';
import InfoMain from './InfoMain';
import '../MainHomePage/main.css'; 

const Info: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-screen mx-auto flex flex-col">
      <Navbar />
      <div className="w-full h-[75vh] flex-grow flex flex-col items-center justify-center">
        <InfoMain />
      </div>
      <Footer />
    </div>
  );
};

export default Info;