import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SearchBar from "./Page/ClubIntroDetail/components/SearchBar";
import SideBar from "./Page/ClubIntroDetail/SideBar";
import ClubMatching from "./Page/ClubMatching/pages/ClubMatching";
import ClubIntroDetailPage from "./Page/ClubIntroDetail/ClubIntroDetailPage";

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
        path="/clubintrodetail/:clubId"
        element={
          <LayoutWithSidebar>
            <ClubIntroDetailPage/>
          </LayoutWithSidebar>
        }
      />
      <Route path='/clubmatching' element={<ClubMatching />} />
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
