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

// import footer from '../assets/images/footer.svg';

// const Footer: React.FC = () => {
//     return (
//         <div className="absolute left-[1030px] top-[960px] justify-center w-[300px] h-[150px]">
//             <a
//                 href="https://github.com/SMUMC-8th"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img src={footer} alt="Logo" className="w-auto h-auto" />
//             </a>
//         </div>
//     );
// };

// export default Footer;
