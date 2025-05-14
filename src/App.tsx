import "./assets/styles/App.css";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import ClubDetailCard from "./components/ClubDetailCard";
import ClubMatchingIntro from "./Page/ClubMatchingIntro";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import Home from "./Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
    ],
  },
]);

function App() {
  function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Home />
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
                recruitTarget="대상"
                recruitPeriod="기간"
                recruitMethod="방법"
                activities="활동"
                faqLink="링크"
              />
            </LayoutWithSidebar>
          }
        />
        <Route path="/clubmatching" element={<ClubMatchingIntro />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
