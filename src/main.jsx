import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Page/Root/Root.jsx";
import Home from "./Page/Home/Home.jsx";
import Login from "./Page/Login/Login.jsx";
import Register from "./Page/Register/Register.jsx";

export const AuthContext = createContext(null);
const userInfo = {
  email: "sohag@roy.com",
};

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext value={userInfo}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>,
);
