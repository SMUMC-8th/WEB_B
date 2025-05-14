import React from "react";
import logo from "../assets/logo.svg"; // SVG를 경로로 불러오기
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="relative w-full h-[150px] bg-white text-black flex justify-between items-center px-4 px-16 group">
      <img
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
        className="w-[220px] h-[100px] mr-2"
      />{" "}
      {/* 로고 */}
      <ul className="flex font-semibold text-md md:text-lg lg:text-xl xl:text-2xl gap-18">
        <li>
          <a href="/introWeb" className="hover:text-gray-400">
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
          <a
            onClick={() => navigate("/calendar")}
            className="hover:text-gray-400"
          >
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
      <div className="absolute left-0 hidden w-full bg-gray-100 shadow-lg top-full group-hover:block">
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
