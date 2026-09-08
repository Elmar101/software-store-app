
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css"
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        { index: true, Component: Home },
        {
            path: "about",
            Component: About
        },
        {
            path: "contacts",
            Component: Contacts
        }
    ]
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

