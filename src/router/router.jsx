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
import AvatarElements from '../Pages/AvatarElements';
import BadgeElement from "../Pages/BadgeElement";
import AlertElements from "../Pages/AlertElements";
import LoaderElements from "../Pages/LoaderElements";
import SpinnerElements from "../Pages/SpinnerElements";
import TooltipElements from "../Pages/TooltipElement";
import ProgressBarElements from "../Pages/ProgressBarElements";
import BreadcrumbElements from "../Pages/BreadcrumbElements";
import NavigationElements from "../Pages/NavigationElements";
import SliderElements from "../Pages/SliderElements";


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
        path: "modals&drawer",
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
      {
        path: "feedback/avatar",
        element: <AvatarElements />,
        handle: {
          title: "Avatar",
        },
      },
      {
        path: "feedback/badge",
        element: <BadgeElement />,
        handle: {
          title: "Badge",
        },
      },
      {
        path: "feedback/alert",
        element: <AlertElements />,
        handle: {
          title: "Alert",
        },
      },
      {
        path: "feedback/loader",
        element: <LoaderElements />,
        handle: {
          title: "Loader",
        },
      },
      {
        path: "feedback/spinner",
        element: <SpinnerElements />,
        handle: {
          title: "Spinner",
        },
      },
      {
        path: "feedback/tooltip",
        element: <TooltipElements />,
        handle: {
          title: "Tooltip",
        },
      },
      {
        path: "feedback/progressbar",
        element: <ProgressBarElements />,
        handle: {
          title: "ProgressBar",
        },
      },
      {
        path: "navigation/breadcrumb",
        element: <BreadcrumbElements />,
        handle: {
          title: "Breadcrumb",
        },
      },
      {
        path: "navigation/navigation",
        element: <NavigationElements />,
        handle: {
          title: "Breadcrumb",
        },
      },
      {
        path: "slider",
        element: <SliderElements />,
        handle: {
          title: "Slider",
        },
      },
    ],
  },
]);

export default routers;