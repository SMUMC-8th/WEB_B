import React from 'react';
import './main.css'; 
import footer from '../../assets/footer.svg'; // SVG를 경로로 불러오기

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[100px] bg-white text-black flex justify-center items-end py-6">
        <img src={footer} alt="Logo" className="w-auto h-auto" /> {/* 로고 */}
    </div>
  );
};

export default Footer;