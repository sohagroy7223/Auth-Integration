import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Page/Root/Root.jsx";
import Home from "./Page/Home/Home.jsx";
import Login from "./Page/Login/Login.jsx";
import Register from "./Page/Register/Register.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Orders from "./Page/Orders/Orders.jsx";
import PrivetRouts from "./Routes/PrivetRouts.jsx";
import Profile from "./Page/Profile/Profile.jsx";
import Dashboard from "./Page/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "orders",
        // Component: Orders,
        element: (
          <PrivetRouts>
            <Orders></Orders>
          </PrivetRouts>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivetRouts>
            <Profile></Profile>
          </PrivetRouts>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivetRouts>
            <Dashboard></Dashboard>
          </PrivetRouts>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
