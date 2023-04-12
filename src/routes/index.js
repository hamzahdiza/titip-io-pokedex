import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { redirect } from "react-router-dom";
import MainPage from "../pages/mainPage";
import DetailPage from "../pages/detailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
]);

export default router;
