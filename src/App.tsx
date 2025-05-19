import "./assets/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import HomePage from "./Page/HomePage";
import ClubListPage from "./Page/ClubListPage";
import IntroPage from "./Page/IntroPage";
import InfoPage from "./Page/InfoPage";

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
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/infoweb",
        element: <InfoPage />,
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
