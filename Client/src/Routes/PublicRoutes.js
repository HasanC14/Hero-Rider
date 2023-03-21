import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import LearnerReg from "../Components/LearnerReg/LearnerReg";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";
import RiderReg from "../Components/RiderReg/RiderReg";
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
      { path: "/RiderReg", element: <RiderReg></RiderReg> },
      { path: "/LearnerReg", element: <LearnerReg></LearnerReg> },
      { path: "/Profile", element: <Profile></Profile> },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
