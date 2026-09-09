import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import ButtonElement from "../Pages/ButtonElement";
import CardElement from "../Pages/CardElement";
import InputElement from "../Pages/inputElement";
import TableElements from "../Pages/TableElements";
import SelectElement from "../Pages/SelectElement";
import TextareaElement from "../Pages/TextareaElement";
import FileInputElement from "../Pages/FileInputElement";
import ModalElement from '../Pages/ModalElement'
import CheckboxElement from '../Pages/CheckboxElement'
import SwitchElement from "../Pages/SwitchElement";
import RadioElement from "../Pages/RadioElement";

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
        handle: {
          title: "Dashboard",
        },
      },
      {
        path: "buttons",
        element: <ButtonElement />,
        handle: {
          title: "Buttons",
        },
      },
      {
        path: "cards",
        element: <CardElement />,
        handle: {
          title: "Cards",
        },
      },
      {
        path: "modals",
        element: <ModalElement />,
        handle: {
          title: "Modals",
        },
      },
      {
        path: "inputs",
        element: <InputElement />,
        handle: {
          title: "Input",
        },
      },
      {
        path: "tables",
        element: <TableElements />,
        handle: {
          title: "Tables",
        },
      },
      {
        path: "form/select",
        element: <SelectElement />,
        handle: {
          title: "Select",
        },
      },
      {
        path: "form/textarea",
        element: <TextareaElement />,
        handle: {
          title: "Textarea",
        },
      },
      {
        path: "form/fileinput",
        element: <FileInputElement />,
        handle: {
          title: "File Input",
        },
      },
      {
        path: "form/checkbox",
        element: <CheckboxElement />,
        handle: {
          title: "Checkbox",
        },
      },
      {
        path: "form/switch",
        element: <SwitchElement />,
        handle: {
          title: "Checkbox",
        },
      },
      {
        path: "form/radio",
        element: <RadioElement />,
        handle: {
          title: "Radio",
        },
      },
    ],
  },
]);

export default routers;