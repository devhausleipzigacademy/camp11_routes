import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewBlog from "./pages/NewBlog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Sidebar />,
          children: [
            {
              index: true,
              element: <Blog />,
            },
            {
              path: ":id",
              element: <SingleBlog />,
            },
            {
              path: "new",
              element: <NewBlog />,
            },
          ],
        },
        {
          path: "*",
          element: <div>404</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
