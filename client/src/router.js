import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Video from "./pages/Video";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "video",
        children: [
          {
            path: ":id",
            element: <Video />,
          },
        ],
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
