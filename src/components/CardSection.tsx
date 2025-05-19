import React from 'react';
import { IoMdBookmarks } from "react-icons/io";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";

const CardSection: React.FC = () => {
  return (
    <div className="flex justify-center gap-12 mt-10 text-[24px]">
      <div className="w-[180px] h-[180px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5">
        <p className="font-semibold">동아리 소개</p>  
        <IoMdBookmarks className='w-16 h-16 mb-2' />
      </div>
      
      <div className="w-[180px] h-[180px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5">
        <p className="font-semibold">동아리 매칭</p>  
        <MdFaceRetouchingNatural className='w-16 h-16 mb-2' />
      </div>
      
      <div className="w-[180px] h-[180px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5">
        <p className="font-semibold">도움말</p>  
        <IoMdInformationCircleOutline className='w-16 h-16 mb-2' />
      </div>
      
    </div>
  );
};

export default CardSection; 