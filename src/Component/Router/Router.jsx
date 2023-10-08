import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import Main from "../Main";
import Home from "../Home";
import ResponsiveNavbar from "../ResponsiveNavbar";
import Dashboard from "../../Pages/Dashboard";
import DashboardUser from "../../Pages/DashboardUser";
import Login from "../Login";
import Registration from "../Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/users",
        element: <DashboardUser />,
      },
    ],
  },
]);

export default router;
