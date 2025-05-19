import "./assets/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import Home from "./Page/HomePage";
import Intro from "./Page/IntroPage";
import Info from "./Page/InfoPage";
// import ClubIntroDetailPage from "./Page/ClubIntroDetailPage";

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
        path: "/introweb",
        element: <Intro />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/infoweb",
        element: <Info />,
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

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import SearchBar from './Page/ClubIntro/components/SearchBar';
// import SideBar from './Page/ClubIntro/SideBar';
// import ClubListPage from './Page/ClubIntro/ClubListPage';

// function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
//     return (
//         <>
//             <SearchBar categoryTitle="카테고리" />
//             <div className="flex">
//                 <SideBar />
//                 {children}
//             </div>
//         </>
//     );
// }

// function AppRoutes() {
//     return (
//         <Routes>
//             <Route
//                 path="/clubintro"
//                 element={
//                     <LayoutWithSidebar>
//                         <ClubListPage />
//                     </LayoutWithSidebar>
//                 }
//             />
//         </Routes>
//     );
// }

// function App() {
//     return (
//         <Router>
//             <AppRoutes />
//         </Router>
//     );
// }

export default App;
