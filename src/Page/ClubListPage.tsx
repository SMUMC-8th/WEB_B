// import Card from '../components/ClubList/Card';
// import SearchBar from '../components/ClubList/SearchBar';
// import Footer from '../components/Footer';
// import SideBar from '../components/SideBar';

// const clubData = [
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['아동', '인권', '봉사'],
//         clubName: '가온누리',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['데이터', 'SQL', '스터디'],
//         clubName: '모멘텀',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['상냥이', '생물권', '생태계'],
//         clubName: '상냥행',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['자기이해', '상담', '심리학'],
//         clubName: '상명또래상담',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['콘텐츠', '영상', '제작'],
//         clubName: '에듀플릿',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['스터디', '코딩', '멘토링'],
//         clubName: '이니로',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['챌린지', '갓생', '소모임'],
//         clubName: '체인지',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '../src/assets/images/image.svg',
//         tags: ['프로젝트', '개발', '협업'],
//         clubName: 'UMC',
//         description: '한 줄 소개~',
//     },
// ];

// const ClubListPage = () => {
//     return (
//         <>
//             <SearchBar categoryTitle="카테고리" />
//             <div className="flex">
//                 <SideBar />
//                 <div className="p-10 grid grid-cols-4 gap-x-30 gap-y-30 space-between">
//                     {clubData.map((club, idx) => (
//                         <Card
//                             key={idx}
//                             imageUrl={club.imageUrl}
//                             tags={club.tags}
//                             clubName={club.clubName}
//                             description={club.description}
//                         />
//                     ))}
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// };

// export default ClubListPage;

import Card from "../components/ClubList/Card";
import SearchBar from "../components/ClubList/SearchBar";
import SideBar from "../components/SideBar";

const clubData = [
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["아동", "인권", "봉사"],
    clubName: "가온누리",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["데이터", "SQL", "스터디"],
    clubName: "모멘텀",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["상냥이", "생물권", "생태계"],
    clubName: "상냥행",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["자기이해", "상담", "심리학"],
    clubName: "상명또래상담",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["콘텐츠", "영상", "제작"],
    clubName: "에듀플릿",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["스터디", "코딩", "멘토링"],
    clubName: "이니로",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["챌린지", "갓생", "소모임"],
    clubName: "체인지",
    description: "한 줄 소개~",
  },
  {
    imageUrl: "../src/assets/images/image.svg",
    tags: ["프로젝트", "개발", "협업"],
    clubName: "UMC",
    description: "한 줄 소개~",
  },
];

const ClubListPage = () => {
  return (
    <>
      <SearchBar categoryTitle="카테고리" />
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* 사이드바 - 넓은 화면에서만 보이게 */}
        <div className="hidden lg:block w-full lg:w-[200px]">
          <SideBar />
        </div>

        {/* 카드 리스트 */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {clubData.map((club, idx) => (
              <Card
                key={idx}
                imageUrl={club.imageUrl}
                tags={club.tags}
                clubName={club.clubName}
                description={club.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubListPage;
