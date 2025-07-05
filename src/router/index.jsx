import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
