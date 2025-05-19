import "./assets/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./Page/CalendarPage";
import RootLayout from "./layout/RootLayout";
import Home from "./Page/Home";
import Intro from "./Page/Intro";
import ClubIntroDetailPage from "./Page/ClubIntroDetailPage";

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
        path: "/introWeb",
        element: <Intro />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/clubintrodetail",
        element: <ClubIntroDetailPage />,
      },
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
