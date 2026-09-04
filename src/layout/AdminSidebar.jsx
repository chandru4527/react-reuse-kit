import { MdClose, MdDashboard, MdTouchApp, MdCreditCard, MdGridOn, MdOpenInNew, MdEdit, } from "react-icons/md";
import useSidebarStore from "../store/useSidebarStore";
import SidebarMenu from "./SidebarMenu";

const sidebarMenu = [
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
    label: "Forms",
    icon: MdEdit,
    children: [
      {
        path: "/admin/inputs",
        label: "Input",
      },
      {
        path: "/admin/select",
        label: "Select",
      },
    ],
  },
];

const AdminSidebar = () => {
  const { isCollapsed, isMobileOpen, closeMobileSidebar, setCollapsed, } = useSidebarStore();

  const showText = !isCollapsed || isMobileOpen;

  return (
    <>
      {isMobileOpen && (
        <div
          onClick={closeMobileSidebar}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-hidden bg-blue-700 shadow-lg transition-all duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Header */}
        <div
          className={`flex h-16 w-full shrink-0 items-center px-3 ${showText ? "justify-between" : "justify-center"
            }`}
        >
          <h1
            className={`whitespace-nowrap font-bold text-white transition-all duration-300 ${showText ? "text-xl" : "text-lg"
              }`}
          >
            {showText ? "CK Admin" : "CK"}
          </h1>

          <button
            type="button"
            onClick={closeMobileSidebar}
            className="rounded p-1 text-white transition hover:bg-white hover:text-blue-700 lg:hidden"
          >
            <MdClose size={26} />
          </button>
        </div>

        {/* Menu Title */}
        {showText && (
          <div className="shrink-0 px-5 py-3 text-xs font-semibold uppercase text-white">
            Menu
          </div>
        )}

        {/* Menu */}
        <nav
          className={`flex-1 overflow-y-auto pb-4 ${showText ? "px-3" : "px-0"
            }`}
        >
          <div className="space-y-1">
            {sidebarMenu.map((item) => (
              <SidebarMenu
                key={item.label}
                item={item}
                collapsed={isCollapsed}
                mobileOpen={isMobileOpen}
                showText={showText}
                setCollapsed={setCollapsed}
                closeMobileSidebar={closeMobileSidebar}
              />
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
