import React from 'react';
import './main.css';
import logo from '../../assets/logo.svg'; // SVG를 경로로 불러오기

const NavBar: React.FC = () => {
  return (
    <nav className="relative w-full h-[150px] bg-white text-black flex justify-between items-center px-4 px-16 mb-4 group">
      <img src={logo} alt="Logo" className="w-[220px] h-[100px] mr-2" /> {/* 로고 */}
      <ul className="flex text-[24px] font-semibold gap-18">
        <li>
          <a href="#webIntro" className="hover:text-gray-400">
            웹사이트 소개
          </a>
        </li>
        <li>
          <a href="#clubIntro" className="hover:text-gray-400">
            동아리 소개
          </a>
        </li>
        <li>
          <a href="#clubMatch" className="hover:text-gray-400">
            동아리 매칭
          </a>
        </li>
        <li>
          <a href="#calendar" className="hover:text-gray-400">
            모집 일정
          </a>
        </li>
        <li>
          <a href="#notice" className="hover:text-gray-400">
            도움말
          </a>
        </li>
      </ul>
      {/* 드롭다운 메뉴 */}
      <div className="absolute left-0 top-full w-full bg-gray-100 shadow-lg hidden group-hover:block">
        <ul className="flex justify-around py-4">
          <li>
            <a href="#category1" className="text-black hover:text-gray-600">
              카테고리 1
            </a>
          </li>
          <li>
            <a href="#category2" className="text-black hover:text-gray-600">
              카테고리 2
            </a>
          </li>
          <li>
            <a href="#category3" className="text-black hover:text-gray-600">
              카테고리 3
            </a>
          </li>
          <li>
            <a href="#category4" className="text-black hover:text-gray-600">
              카테고리 4
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;