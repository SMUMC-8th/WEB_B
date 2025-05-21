//시험용

import { TClubDetail } from '../types/ClubDetail';


export const fetchMockClubDetail = async (): Promise<TClubDetail> => {
  const response = {
    success: true,
    code: 'CLUB200',
    message: '성공적으로 처리했습니다.',
    result: {
      club_id: 1,
      name: '가온누리',
      category: 'STUDY',
      description: '열정 넘치는 학술 동아리입니다.',
      target: '전 학과 재학생',
      start: '2025-05-01',
      end: '2025-05-31',
      instagram: '@gaon_nuri',
    },
  };

  // ✅ async로 만든 함수에서 await 사용 가능
  await new Promise((r) => setTimeout(r, 300)); // 비동기 흉내

  const { name, description, target, start, end, instagram } = response.result;

  return {
    title: name,
    description,
    target: target,
    duration: `${start} ~ ${end}`,
    method: '구글폼 (링크 예정)',
    activity: '세미나, 스터디, 외부공모전',
    link: instagram,
  };
};
