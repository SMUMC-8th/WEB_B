import React from 'react';
import './main.css'; 
import smu from '../../assets/smu.svg'; // SVG를 경로로 불러오기
import SerchBar from './SearchBar'; // SearchBar 컴포넌트 import
import CategoryCard from './CategoryCard'; // CategoryCard 컴포넌트 import

const Main: React.FC = () => {
  return (
    <div className="w-full h-[75vh] bg-no-repeat bg-center bg-cover flex-grow 
        flex flex-col items-center justify-center "
         style={{ backgroundImage: `url(${smu})` }}>

        <p className="text-white text-[32px] font-extrabold"
            style={{
                WebkitTextStroke: '1px black', // 글자 테두리
            }}>
            나에게 <span className='text-yellow-300'>딱 맞는</span> 상명대학교 동아리는?
        </p>

        <SerchBar />

        <div>
          <p className='text-[18px] font-bold py-4'>오늘의 랜덤 추천 동아리</p>
          <div className='flex gap-4'>
            <CategoryCard category="IT" hash='개발' clubName='UMC'/>
            <CategoryCard category="문화" hash='댄스' clubName='토네이도'/>
            <CategoryCard category="스포츠" hash='배드민턴' clubName='슴콕'/>
            <CategoryCard category="IT" hash='개발' clubName='멋쟁이사자처럼'/>
          </div>
        </div>
        

    </div>
  );
};

export default Main;