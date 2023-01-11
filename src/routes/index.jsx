import Home from "pages/home";
import Liked from 'pages/liked'
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/liked",
    element: <Liked/>
  }
]);