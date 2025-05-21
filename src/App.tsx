import "./assets/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import HomePage from "./Page/HomePage";
import ClubListPage from "./Page/ClubListPage";
import IntroPage from "./Page/IntroPage";
import InfoPage from "./Page/InfoPage";
import ClubSearchPage from "./Page/ClubSearchPage";
import ClubMathcing from "./Page/ClubMatching";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/introweb",
        element: <IntroPage />,
      },
      {
        path: "/clubintro",
        element: <ClubListPage />,
      },
      // {
      //   path: "/clubintrodetail",
      //   element: (
      //     <ClubDetailCard
      //       title="동아리명"
      //       description="동아리 소개"
      //       target="대상"
      //       duration="기간"
      //       method="방법"
      //       activity="활동"
      //       link="링크"
      //     />
      //   ),
      // },
      {
        path: "/clubmatching",
        element: <ClubMathcing />,
      },
      {
        path: "/clubmatching/:step",
        element: <ClubMathcing />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/infoweb",
        element: <InfoPage />,
      },
      {
        path: "/clubsearch",
        element: <ClubSearchPage />,
      },
      // {
      //   path: "/clubintrodetail",
      //   element: <ClubIntroDetailPage />,
      // },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
