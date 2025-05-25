import { useQuery } from '@tanstack/react-query';
import { TMatchForm, TMatchResult } from '../types/MatchForm';
import { fetchMatchedClubs } from '../apis/axios';

const ClubMatchingResult = ({matchForm}:{matchForm:TMatchForm}) => {
  const { data, isLoading, error } = useQuery<TMatchResult[]>({
    queryKey: ['matchedClubs', matchForm],
    queryFn: () => fetchMatchedClubs(matchForm),
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-relaxed">
        아래는 선택하신 조건과 유사한 <br /> 동아리 목록입니다.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data!.map((club) => (
          <div key={club.id} className="w-[240px] rounded-xl bg-[#D6DBEA] p-4 shadow-md">
            <div className="text-sm mb-2">
              {club.matchLevel === '완벽 일치' && <span className="text-black">🟢 완벽 일치</span>}
              {club.matchLevel === '일부 조건 일치' && <span className="text-black font-bold">🟡 일부 조건 일치</span>}
            </div>
            <div className="h-[120px] bg-gray-300 rounded mb-2" />
            <div className="text-xs text-black mb-1">
              {club.hashtags.map(tag => `${tag} `)}
            </div>
            <div className="font-bold text-xl">{club.name}</div>
            <div className='flex'>
              <button className="ml-auto mt-2 px-3 py-1 text-xs bg-[#112868] text-white rounded-full">
                구경가기 &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubMatchingResult;
