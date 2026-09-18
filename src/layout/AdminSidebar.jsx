import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useSidebarStore from "../store/useSidebarStore";

import { MdClose, MdExpandMore, } from "react-icons/md";

import { menuItems } from "./SidebarMenuitems";

const AdminSidebar = () => {
  const location = useLocation();

  const {
    isCollapsed,
    isMobileOpen,
    toggleCollapse,
    closeMobileSidebar,
  } = useSidebarStore();

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
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-99 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-blue-600 h-screen z-99 fixed top-0 left-0
        w-64 flex flex-col overflow-hidden transition-all duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:sticky lg:top-0
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Header */}
        <div className="h-17 min-h-17 shrink-0 flex items-center justify-between px-4">
          <NavLink
            to="/admin"
            className="flex items-center justify-center"
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
            className="lg:hidden text-white text-3xl cursor-pointer"
          >
            <MdClose />
          </button>
        </div>

        {/* Menu Title */}
        {showText && (
          <div className="shrink-0 px-5 py-3 text-xs uppercase text-white font-semibold">
            Menu
          </div>
        )}

        {/* Scroll Area */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 pb-10 scrollbar-none">
          <nav className="space-y-2">
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
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded text-sm transition-all 
                          cursor-pointer duration-300 ${isParentActive
                            ? "bg-white text-blue-700 font-semibold"
                            : "text-white hover:bg-white hover:text-blue-700"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl flex items-center justify-center shrink-0">
                            <item.icon />
                          </span>

                          {showText && (
                            <span className="whitespace-nowrap">
                              {item.label}
                            </span>
                          )}
                        </div>

                        {showText && (
                          <MdExpandMore
                            className={`text-xl transition-transform duration-30 cursor-pointer ${openMenu === item.label ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${!isCollapsed && openMenu === item.label
                          ? "max-h-250 mt-1"
                          : "max-h-0"
                          }`}
                      >
                        <div className="ml-10 space-y-1">
                          {item.children.map((child, index) => (
                            <NavLink
                              key={`${child.path}-${index}`}
                              to={child.path}
                              onClick={() => {
                                setOpenMenu(item.label);
                                closeMobileSidebar();
                              }}
                              className={({ isActive }) =>
                                `flex items-center px-4 py-2.5 rounded text-sm transition-all duration-300 ${isActive
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
                    /* Normal Menu Item */
                    <NavLink
                      to={item.path}
                      end={item.path === "/admin"}
                      onClick={() => {
                        closeAllAccordions();
                        closeMobileSidebar();
                      }}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2.5 rounded text-sm transition-all duration-300 ${isActive
                          ? "bg-white text-blue-700 font-semibold"
                          : "text-white hover:bg-white hover:text-blue-700"
                        }`
                      }
                    >
                      <span className="text-xl flex items-center justify-center shrink-0">
                        <item.icon />
                      </span>

                      {showText && (
                        <span className="whitespace-nowrap">
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;