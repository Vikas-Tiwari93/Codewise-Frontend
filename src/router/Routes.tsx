import { createBrowserRouter } from "react-router-dom";
import CheckAuth from "../components/AuthFunction/CheckAuth";
import Homepage from "../pages/Admin/Homepage";
import { Navigate } from "react-router-dom";

import Authpage from "../pages/Authpage/Authpage";
import ForgetPassword from "../pages/Authpage/forgetpassword/ForgetPassword";
import Signup from "../pages/Authpage/signup/Signup";
import Redirect from "../pages/redirect/Redirect";
import Signin from "../pages/Authpage/signin/Signin";
import Verification from "../pages/Authpage/authverification/Verification";

import Student from "../pages/Authpage/signup/student/Student";
import Admin from "../pages/Authpage/signup/admin/Admin";
import Select from "../pages/Authpage/signup/select/Select";
import Studentnext from "../pages/Authpage/signup/student/Studentnext";
import Adminnext from "../pages/Authpage/signup/admin/Adminnext";
import Dashboard from "../pages/Admin/admin-overview/Dashboard";
import Classes from "../pages/Admin/admin-overview/Classes";
import Assignments from "../pages/Admin/admin-overview/Assignments";
import Topics from "../pages/Admin/admin-overview/Topics";
const routes = createBrowserRouter([
  {
    path: "/",

    element: (
      <CheckAuth>
        <Navigate to="/homepage" />
      </CheckAuth>
    ),
  },
  {
    path: "*",

    element: <p>page cant be found</p>,
  },

  {
    path: "/admin/homepage",
    element: (
      <CheckAuth>
        <Homepage />
      </CheckAuth>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "classes",

        element: <Classes />,
      },
      {
        path: "assignments",

        element: <Assignments />,
      },
      {
        path: "topics",

        element: <Topics />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authpage />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
        children: [
          { path: "select", element: <Select /> },
          {
            path: "student",
            element: <Student />,
          },
          { path: "student/nextpage", element: <Studentnext /> },
          {
            path: "admin",
            element: <Admin />,
          },
          { path: "admin/nextpage", element: <Adminnext /> },
        ],
      },
      {
        path: "verification",
        element: <Verification />,
      },
    ],
  },
  {
    path: "/redirect",
    element: <Redirect />,
  },
]);
export default routes;
