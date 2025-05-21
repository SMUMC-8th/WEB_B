import ClubDetailCard from "../components/ClubIntroDetail/ClubDetailCard";
import SearchBar from "../components/ClubIntroDetail/SearchBar";
import SideBar from "../components/ClubIntroDetail/SideBar";

const ClubIntroDetail = () => {
  function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
    return (
      <>
        <SearchBar categoryTitle="카테고리" />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar categoryTitle="카테고리" />
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* 사이드바 - 넓은 화면에서만 보이게 */}
        <div className="hidden lg:block w-full lg:w-[200px]">
          <SideBar />
          {/* 카드 리스트 */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              <ClubDetailCard
                title="동아리명"
                description="동아리 소개"
                target="대상"
                duration="기간"
                method="방법"
                activity="활동"
                link="링크"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubIntroDetail;
