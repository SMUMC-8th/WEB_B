import React from "react";
import footer from "../assets/images/footer.svg"; // SVG를 경로로 불러오기

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[10vh] bg-white text-black flex justify-center items-end py-6">
      <img src={footer} alt="Logo" className="w-auto h-auto" /> {/* 로고 */}
    </div>
  );
};

export default Footer;
