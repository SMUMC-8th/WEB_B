// import Card from './components/Card';
// import Footer from './components/footer';

// const clubData = [
//     {
//         imageUrl: '/image.svg',
//         tags: ['아동', '인권', '봉사'],
//         clubName: '가온누리',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['데이터', 'SQL', '스터디'],
//         clubName: '모멘텀',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['상냥이', '생물권', '생태계'],
//         clubName: '상냥행',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['자기이해', '상담', '심리학'],
//         clubName: '상명또래상담',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['콘텐츠', '영상', '제작'],
//         clubName: '에듀플릿',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['스터디', '코딩', '멘토링'],
//         clubName: '이니로',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['챌린지', '갓생', '소모임'],
//         clubName: '체인지',
//         description: '한 줄 소개~',
//     },
//     {
//         imageUrl: '/image.svg',
//         tags: ['프로젝트', '개발', '협업'],
//         clubName: 'UMC',
//         description: '한 줄 소개~',
//     },
// ];

// const ClubListPage = () => {
//     return (
//         <div className="p-10 grid grid-cols-4 gap-x-30 gap-y-30 space-between">
//             {clubData.map((club, idx) => (
//                 <Card
//                     key={idx}
//                     imageUrl={club.imageUrl}
//                     tags={club.tags}
//                     clubName={club.clubName}
//                     description={club.description}
//                 />
//             ))}

//             <div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default ClubListPage;
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Footer from './components/footer';

// 상단에 인터페이스 정의
interface Club {
    imageUrl: string;
    tags: string[];
    clubName: string;
    description: string;
}

// clubs 상태 정의 시 타입 명시
const [clubs, setClubs] = useState<Club[]>([]);

const ClubListPage = () => {
    const [clubData, setClubData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchClubs = async (category = '') => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/clubs?category=${category}`); // 카테고리 필터링 쿼리
            setClubData(response.data);
        } catch (error) {
            console.error('동아리 정보를 가져오는 중 에러 발생:', error);
        } finally {
            setLoading(false);
        }
    };
    const fetchClubs = async () => {
        try {
            const response = await axios.get<Club[]>('/api/clubs'); // 반환 타입도 명확히
            setClubs(response.data);
        } catch (error) {
            console.error('클럽 데이터를 불러오는 데 실패했습니다:', error);
        }
    };

    useEffect(() => {
        fetchClubs(); // 초기 로딩 시 모든 데이터 호출
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="p-10 grid grid-cols-4 gap-x-[30px] gap-y-[30px]">
                {loading ? (
                    <p className="col-span-4 text-center">불러오는 중...</p>
                ) : (
                    clubData.map((club, idx) => (
                        <Card
                            key={idx}
                            imageUrl={club.imageUrl}
                            tags={club.tags}
                            clubName={club.clubName}
                            description={club.description}
                        />
                    ))
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ClubListPage;
