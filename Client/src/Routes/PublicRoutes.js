import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
      { path: "/About", element: <About></About> },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
