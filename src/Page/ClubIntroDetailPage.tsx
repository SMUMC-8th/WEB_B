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
    <LayoutWithSidebar>
      <ClubDetailCard
        title="동아리명"
        description="동아리 소개"
        target="대상"
        duration="기간"
        method="방법"
        activity="활동"
        link="링크"
      />
    </LayoutWithSidebar>
  );
};

export default ClubIntroDetail;
