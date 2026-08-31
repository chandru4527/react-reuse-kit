import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, } from "react-icons/md";

import useSidebarStore from "../store/useSidebarStore";

const SidebarMenu = ({ item }) => {
  const location = useLocation();

  const { isCollapsed, closeMobileSidebar, } = useSidebarStore();

  const hasChildren = item.children?.length > 0;

  // Check if any child route is active
  const isChildActive = item.children?.some(
    (child) => location.pathname === child.path
  );

  const [isOpen, setIsOpen] = useState(isChildActive);

  // Automatically open parent when child is active
  useEffect(() => {
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive]);

  const Icon = item.icon;

  // Normal menu item
  if (!hasChildren) {
    return (
      <NavLink
        to={item.path}
        end={item.path === "/admin"}
        onClick={closeMobileSidebar}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded px-3 py-3 transition-all hover:text-blue-600 ${isActive
            ? "bg-white text-blue-600"
            : "text-white hover:bg-white"
          } ${isCollapsed ? "lg:justify-center" : ""}`
        }
      >
        <Icon size={22} />

        <span
          className={`whitespace-nowrap ${isCollapsed ? "lg:hidden" : ""
            }`}
        >
          {item.label}
        </span>
      </NavLink>
    );
  }

  // Accordion menu
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all ${isChildActive
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
          } ${isCollapsed ? "lg:justify-center" : ""}`}
      >
        <Icon size={22} />

        <span
          className={`flex-1 whitespace-nowrap ${isCollapsed ? "lg:hidden" : ""
            }`}
        >
          {item.label}
        </span>

        {!isCollapsed && (
          isOpen ? (
            <MdKeyboardArrowDown size={22} />
          ) : (
            <MdKeyboardArrowUp size={22} />
          )
        )}
      </button>

      {/* Submenu */}
      {!isCollapsed && isOpen && (
        <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-3">
          {item.children.map((child) => {
            const ChildIcon = child.icon;

            return (
              <NavLink
                key={child.path}
                to={child.path}
                onClick={closeMobileSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {ChildIcon && (
                  <ChildIcon size={18} />
                )}

                <span>{child.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;