import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useSidebarStore from "../store/useSidebarStore";

import {
  MdDashboard,
  MdTouchApp,
  MdCreditCard,
  MdGridOn,
  MdOpenInNew,
  MdEdit,
  MdClose,
  MdExpandMore,
} from "react-icons/md";

const menuItems = [
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
        path: "/admin/form/select",
        label: "Select",
      },
      {
        path: "/admin/form/textarea",
        label: "Textarea",
      },
      {
        path: "/admin/form/fileinput",
        label: "FileInput",
      },
    ],
  },
];

const AdminSidebar = () => {
  const location = useLocation();

  const { isCollapsed, isMobileOpen, toggleCollapse, closeMobileSidebar,} = useSidebarStore();

  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    if (isCollapsed && !isMobileOpen) {
      setOpenMenu(null);
      return;
    }

    const activeParent = menuItems.find((item) =>
      item.children?.some((child) =>
        location.pathname.startsWith(child.path)
      )
    );

    if (activeParent) {
      setOpenMenu(activeParent.label);
    }
  }, [location.pathname, isCollapsed, isMobileOpen]);

  const showText = !isCollapsed || isMobileOpen;

  const handleAccordion = (label) => {
    if (isCollapsed && !isMobileOpen) {
      toggleCollapse();
      setOpenMenu(label);
      return;
    }

    setOpenMenu((prev) => (prev === label ? null : label));
  };

  const closeAllAccordions = () => {
    setOpenMenu(null);
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-99 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside
        className={`bg-blue-600 h-screen z-99 overflow-hidden transition-all duration-300 ease-in-out
        fixed top-0 left-0 w-64
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:sticky lg:top-0
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Logo */}
        <div className="h-17 flex items-center justify-between px-4 w-full">
          <NavLink
            to="/admin"
            className="flex justify-center items-center"
            onClick={() => {
              closeAllAccordions();
              closeMobileSidebar();
            }}
          >
            <h1 className="text-lg text-white font-bold">Admin</h1>
          </NavLink>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            className="lg:hidden text-white text-3xl"
          >
            <MdClose />
          </button>
        </div>

        {/* Menu Title */}
        {showText && (
          <div className="px-5 py-3 text-xs uppercase text-white font-semibold whitespace-nowrap">
            Menu
          </div>
        )}

        {/* Menu */}
        <nav className="px-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item) => {
            const isParentActive = item.children?.some((child) =>
              location.pathname.startsWith(child.path)
            );

            return (
              <div key={item.label}>
                {item.children ? (
                  <>
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => handleAccordion(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded text-sm transition-all duration-300 ${
                        isParentActive
                          ? "bg-white text-blue-700 font-semibold"
                          : "text-white hover:bg-white hover:text-blue-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl flex items-center justify-center shrink-0">
                          <item.icon />
                        </span>

                        {showText && (
                          <span className="flex items-center whitespace-nowrap">
                            {item.label}
                          </span>
                        )}
                      </div>

                      {showText && (
                        <MdExpandMore
                          className={`text-xl transition-transform duration-300 ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        !isCollapsed && openMenu === item.label
                          ? "max-h-60 mt-1"
                          : "max-h-0"
                      }`}
                    >
                      <div className="ml-10 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => {
                              setOpenMenu(item.label);
                              closeMobileSidebar();
                            }}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-4 py-2.5 rounded text-sm transition-all duration-300 ${
                                isActive
                                  ? "bg-white text-blue-700 font-semibold"
                                  : "text-white hover:bg-white hover:text-blue-700"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === "/admin"}
                    onClick={() => {
                      closeAllAccordions();
                      closeMobileSidebar();
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2.5 rounded text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-white text-blue-700 font-semibold"
                          : "text-white hover:bg-white hover:text-blue-700"
                      }`
                    }
                  >
                    <span className="text-xl flex items-center justify-center shrink-0">
                      <item.icon />
                    </span>

                    {showText && (
                      <span className="flex items-center whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;