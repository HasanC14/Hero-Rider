import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import LearnerReg from "../Components/LearnerReg/LearnerReg";
import Login from "../Components/Login/Login";
import Payment from "../Components/Payment/Payment";
import Profile from "../Components/Profile/Profile";
import RiderReg from "../Components/RiderReg/RiderReg";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Login", element: <Login></Login> },
      { path: "/About", element: <About></About> },
      { path: "/RiderReg", element: <RiderReg></RiderReg> },
      { path: "/LearnerReg", element: <LearnerReg></LearnerReg> },
      {
        path: "/ProductPayment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hero-rider-server-ashy.vercel.app/ProductPayment/${params.id}`
          ),
      },
      {
        path: "/Dashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
