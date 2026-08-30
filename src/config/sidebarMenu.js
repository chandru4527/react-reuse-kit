import {
  MdDashboard,
  MdTouchApp,
  MdCreditCard,
  MdTextFields,
  MdGridOn,
  MdOpenInNew,
  MdNotificationsActive,
} from "react-icons/md";

export const sidebarMenu = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    path: "/admin",
  },
  {
    label: "Buttons",
    icon: MdTouchApp,
    path: "/admin/buttons",
  },
  {
    label: "Cards",
    icon: MdCreditCard,
    path: "/admin/cards",
  },
  {
    label: "Inputs",
    icon: MdTextFields,
    path: "/admin/inputs",
  },
  {
    label: "Tables",
    icon: MdGridOn,
    path: "/admin/tables",
  },
  {
    label: "Modals",
    icon: MdOpenInNew,
    path: "/admin/modals",
  },
  {
    label: "Alerts",
    icon: MdNotificationsActive,
    path: "/admin/alerts",
  },
];