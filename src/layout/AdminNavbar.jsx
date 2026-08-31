import {MdMenu,MdMenuOpen,} from "react-icons/md";

import useSidebarStore from "../store/useSidebarStore";

const AdminNavbar = () => {
  const {isCollapsed, toggleCollapse, toggleMobileSidebar,} = useSidebarStore();

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 h-16 border-b border-gray-200 bg-white transition-all duration-300 ${
        isCollapsed ? "lg:left-20" : "lg:left-64"
      }`}
    >
      <div className="flex h-full items-center gap-3 px-4 lg:px-6">
        {/* Mobile Sidebar Toggle */}
        <button
          type="button"
          onClick={toggleMobileSidebar}
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <MdMenu size={24} />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          type="button"
          onClick={toggleCollapse}
          className="hidden rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:block"
          aria-label="Toggle sidebar"
        >
            <MdMenu size={24} />
        
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;