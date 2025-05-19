// import Card from './components/Card';

// const ClubListPage = () => {
//     const clubData = [
//         {
//             imageUrl: '/thumbnail1.png',
//             tags: ['아동', '인권', '봉사'],
//             clubName: '가온누리',
//             description: '한 줄 소개~',
//         },
//         {
//             imageUrl: '/thumbnail2.png',
//             tags: ['환경', '지구'],
//             clubName: '그린어스',
//             description: '환경을 생각하는 동아리',
//         },
//     ];

//     return (
//         <div className="p-10 flex flex-wrap gap-6">
//             {clubData.map((club, idx) => (
//                 <Card
//                     key={idx}
//                     imageUrl={club.imageUrl}
//                     tags={club.tags}
//                     clubName={club.clubName}
//                     description={club.description}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ClubListPage;
import Card from './components/Card';
import Footer from './components/footer';

const clubData = [
    {
        imageUrl: '/image.svg',
        tags: ['아동', '인권', '봉사'],
        clubName: '가온누리',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['데이터', 'SQL', '스터디'],
        clubName: '모멘텀',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['상냥이', '생물권', '생태계'],
        clubName: '상냥행',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['자기이해', '상담', '심리학'],
        clubName: '상명또래상담',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['콘텐츠', '영상', '제작'],
        clubName: '에듀플릿',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['스터디', '코딩', '멘토링'],
        clubName: '이니로',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['챌린지', '갓생', '소모임'],
        clubName: '체인지',
        description: '한 줄 소개~',
    },
    {
        imageUrl: '/image.svg',
        tags: ['프로젝트', '개발', '협업'],
        clubName: 'UMC',
        description: '한 줄 소개~',
    },
];

const ClubListPage = () => {
    return (
        <div className="p-10 grid grid-cols-4 gap-x-30 gap-y-30 space-between">
            {clubData.map((club, idx) => (
                <Card
                    key={idx}
                    imageUrl={club.imageUrl}
                    tags={club.tags}
                    clubName={club.clubName}
                    description={club.description}
                />
            ))}

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ClubListPage;
