// import React, { useState } from 'react';
import IntroMain from "../components/IntroMain";

const Intro: React.FC = () => {
  //   const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="w-full h-[1024px] mx-auto border-2 flex flex-col">
      <div className="flex flex-col items-center justify-start flex-grow mt-30">
        <IntroMain />
      </div>
    </div>
  );
};

export default Intro;
