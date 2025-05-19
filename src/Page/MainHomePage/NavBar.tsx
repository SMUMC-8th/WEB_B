import React from 'react';
import './main.css';
import logo from '../../assets/logo.svg'; // SVG를 경로로 불러오기

const NavBar: React.FC = () => {
  return (
    <nav className="relative w-full h-[15vh] bg-white text-black flex items-center ps-16 z-40 overflow-visible">
      <a href="/"><img src={logo} alt="Logo" className="w-[180px] h-[80px] mr-12" /></a>
      <div className="flex-1">
        <div className="relative group w-full">
          {/* 상단 메뉴 */}
          <ul className="flex w-full">
            <li className="flex-1 text-center">
              <a href="/introWeb" className="text-[18px] font-semibold hover:text-gray-400">
                웹사이트 소개
              </a>
            </li>
            <li className="flex-1 text-center">
              <a href="#clubIntro" className="text-[18px] font-semibold hover:text-gray-400">
                동아리 소개
              </a>
            </li>
            <li className="flex-1 text-center">
              <a href="#clubMatch" className="text-[18px] font-semibold hover:text-gray-400">
                동아리 매칭
              </a>
            </li>
            <li className="flex-1 text-center">
              <a href="#calendar" className="text-[18px] font-semibold hover:text-gray-400">
                모집 일정
              </a>
            </li>
            <li className="flex-1 text-center">
              <a href="/info" className="text-[18px] font-semibold hover:text-gray-400">
                도움말
              </a>
            </li>
          </ul>
          {/* 드롭다운 메뉴 */}
          <div className="absolute left-0 top-full w-full shadow-lg z-50 bg-white rounded-b-3xl hidden group-hover:flex">
            <ul className="flex w-full py-6 text-[18px] font-medium">
              <li className="flex-1 flex flex-col gap-2 items-center py-3">
                <a href="#category1" className="text-[18px] text-black hover:text-gray-600">
                  소개
                </a>
                <a href="#category1" className="text-[18px] text-black hover:text-gray-600">
                  이용안내
                </a>
              </li>
              <li className="flex-1 flex flex-col gap-2 items-center">
                <a href="#category2" className="text-[18px] text-black hover:text-gray-600">
                  학술
                </a>
                <a href="#category2" className="text-[18px] text-black hover:text-gray-600">
                  예술
                </a>
                <a href="#category2" className="text-[18px] text-black hover:text-gray-600">
                  동아리
                </a>
                <a href="#category2" className="text-[18px] text-black hover:text-gray-600">
                  종교
                </a>
              </li>
              <li className="flex-1"></li>
              <li className="flex-1"></li>
              <li className="flex-1 flex flex-col gap-2 items-center">
                <a href="#category5" className="text-[16px] text-black hover:text-gray-600">
                  공지사항
                </a>
                <a href="#category5" className="text-[16px] text-black hover:text-gray-600">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;