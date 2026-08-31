import { MdClose } from "react-icons/md";

import useSidebarStore from "../store/useSidebarStore";
import { sidebarMenu } from "../config/sidebarMenu";
import SidebarMenu from "./SidebarMenu";

const AdminSidebar = () => {
  const { isCollapsed, isMobileOpen, closeMobileSidebar, } = useSidebarStore();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={closeMobileSidebar}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${isMobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
          }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-blue-600 shadow-lg transition-all duration-300 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 ${isCollapsed ? "lg:w-20" : "lg:w-64"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-300 px-4">
          <h1
            className={`text-xl font-bold whitespace-nowrap text-white`}
          >
            CK
          </h1>

          <button
            type="button"
            onClick={closeMobileSidebar}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 space-y-2 overflow-y-auto p-3">
          {sidebarMenu.map((item) => (
            <SidebarMenu
              key={item.label}
              item={item}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;