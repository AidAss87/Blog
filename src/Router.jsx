// Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/post/:id",
        element: <Post />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
