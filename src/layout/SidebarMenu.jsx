import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";

const SidebarMenu = ({
    item,
    collapsed,
    mobileOpen,
    showText,
    setCollapsed,
    closeMobileSidebar,
}) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const hasChildren = item.children?.length > 0;

    const isChildActive = hasChildren
        ? item.children.some((child) => location.pathname === child.path)
        : false;

    useEffect(() => {
        if (collapsed && !mobileOpen) {
            setOpen(false);
            return;
        }

        if (isChildActive) {
            setOpen(true);
        }
    }, [location.pathname, collapsed, mobileOpen, isChildActive]);

    const handleAccordion = () => {
        if (collapsed && !mobileOpen) {
            setCollapsed(false);
            setOpen(true);
            return;
        }

        setOpen((prev) => !prev);
    };

    const handleChildClick = () => {
        setOpen(true);
        closeMobileSidebar();
    };

    const activeClass = "bg-white text-blue-700 font-semibold";

    const normalClass =
        "text-white hover:bg-white hover:text-blue-700";

    if (hasChildren) {
        return (
            <div>
                <button
                    type="button"
                    onClick={handleAccordion}
                    className={`flex items-center text-sm transition-all duration-300 
                        ${showText
                            ? "w-full justify-between rounded px-2"
                            : "mx-auto h-12 w-12 justify-center rounded"
                        } ${isChildActive ? activeClass : normalClass}`}
                >
                    <div
                        className={`flex min-w-0 items-center ${showText ? "gap-3" : "justify-center"
                            }`}
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl">
                            {item.icon && <item.icon />}
                        </span>

                        {showText && (
                            <span className="truncate">
                                {item.label}
                            </span>
                        )}
                    </div>

                    {showText && (
                        <MdExpandMore
                            className={`shrink-0 text-xl transition-transform duration-300 ${open ? "rotate-180" : ""
                                }`}
                        />
                    )}
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${!collapsed && open
                        ? "mt-1 max-h-60"
                        : "max-h-0"
                        }`}
                >
                    <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                            <NavLink
                                key={child.path}
                                to={child.path}
                                end
                                onClick={handleChildClick}
                                className={({ isActive }) =>
                                    `flex items-center rounded px-3 py-2 text-md transition-all duration-300 ${isActive
                                        ? activeClass
                                        : normalClass
                                    }`
                                }
                            >
                                {child.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <NavLink
            to={item.path}
            end
            onClick={closeMobileSidebar}
            className={({ isActive }) => `flex items-center text-sm transition-all duration-300   mt-2
            ${showText
                    ? "w-full gap-3 rounded "
                    : "mx-auto h-12 w-12 justify-center rounded"
                } ${isActive ? activeClass : normalClass}`
            }
        >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl">
                {item.icon && <item.icon />}
            </span>

            {showText && (
                <span className="truncate">
                    {item.label}
                </span>
            )}
        </NavLink>
    );
};

export default SidebarMenu;
