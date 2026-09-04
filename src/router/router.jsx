import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import ButtonElement from '../Pages/ButtonElement'
import CardElement from '../Pages/CardElement'
import InputElement from '../Pages/inputElement'
import TableElements from "../Pages/TableElements";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" replace />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path:'buttons',
        element:<ButtonElement/>
      },
      {
        path:'cards',
        element:<CardElement/>
      },
      {
        path: "inputs",
        element: <InputElement />,
      },
      {
        path:'tables',
        element : <TableElements/>
      }
    ],
  },
]);

export default routers;