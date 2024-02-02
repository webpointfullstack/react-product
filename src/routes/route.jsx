import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminLayout from "../layout/AdminLayout";
import AddProducts from "../pages/AddProducts";
import ListProducts from "../pages/ListProduct";
import EditProducts from "../pages/EditProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/add-products",
        element: <AddProducts />,
      },
      {
        path: "/admin",
        element: <ListProducts />,
      },
      {
        path: "/admin/edit-products/:id",
        element: <EditProducts />,
      },
    ],
  },
]);

export { router };
