import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SearchBar from "./Page/ClubIntroDetail/components/SearchBar";
import SideBar from "./Page/ClubIntroDetail/SideBar";
import ClubDetailCard from "./Page/ClubIntroDetail/ClubDetailCard";
import ClubMatchingIntro from "./Page/ClubMatching/pages/ClubMatchingIntro";
import ClubMatchingExperience from "./Page/ClubMatching/pages/ClubMatchingExperience";
import ClubMatchingActivityFormat from "./Page/ClubMatching/pages/ClubMatchingActivityFormat";
import ClubMatchingRecruitMethod from "./Page/ClubMatching/pages/ClubMatchingRecruitMethod";
import ClubMatchingResult from "./Page/ClubMatching/pages/ClubMatchingResult";

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

function AppRoutes() {

  return (
    <Routes>
      <Route
        path="/clubintrodetail"
        element={
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
        }
      />
      <Route path="/clubmatching" element={<ClubMatchingIntro />} />
      <Route path="/clubmatching/experience" element={<ClubMatchingExperience />} />
      <Route path="/clubmatching/activityformat" element={<ClubMatchingActivityFormat />} />
      <Route path="/clubmatching/recruitmethod" element={<ClubMatchingRecruitMethod />} />
      <Route path="/clubmatching/result" element={<ClubMatchingResult />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
