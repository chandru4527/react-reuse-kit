import { useState } from "react";
import { NavLink } from "react-router-dom";

const Tabs = ({
    items = [],

    // --------------------------------
    // Type
    // --------------------------------
    type = "button", // button | navlink

    // --------------------------------
    // Variant
    // --------------------------------
    variant = "underline",

    // --------------------------------
    // State
    // --------------------------------
    defaultTab,
    activeTab,
    onChange,

    // --------------------------------
    // Size
    // --------------------------------
    size = "md",

    // --------------------------------
    // Normal colors
    // --------------------------------
    color = "text-gray-500",
    bgColor = "bg-transparent",

    // --------------------------------
    // Active colors
    // --------------------------------
    activeColor = "text-blue-600",
    activeBgColor = "bg-blue-600",

    // --------------------------------
    // Hover colors
    // --------------------------------
    hoverColor = "hover:text-blue-600",
    hoverBgColor = "hover:bg-gray-100",

    // --------------------------------
    // Border
    // --------------------------------
    borderColor = "border-gray-200",
    activeBorderColor = "border-blue-600",

    // --------------------------------
    // Container
    // --------------------------------
    showContainerBorder = false,
    containerBorderColor = "border-gray-200",

    // --------------------------------
    // Layout
    // --------------------------------
    fullWidth = false,

    // --------------------------------
    // Custom classes
    // --------------------------------
    className = "",
    tabClassName = "",
}) => {
    const [internalTab, setInternalTab] = useState(
        defaultTab || items[0]?.value
    );

    const selectedTab =
        activeTab !== undefined ? activeTab : internalTab;

    // ==========================================
    // SIZES
    // ==========================================

    const sizes = {
        sm: {
            tab: "px-3 py-1.5 text-xs gap-1.5",
            icon: 16,
        },

        md: {
            tab: "px-4 py-2.5 text-sm gap-2",
            icon: 18,
        },

        lg: {
            tab: "px-5 py-3 text-base gap-2.5",
            icon: 20,
        },
    };

    const currentSize = sizes[size] || sizes.md;

    // ==========================================
    // CHANGE
    // ==========================================

    const handleChange = (value) => {
        if (activeTab === undefined) {
            setInternalTab(value);
        }

        onChange?.(value);
    };

    // ==========================================
    // CONTAINER
    // ==========================================

    const containerClasses = `
    flex
    items-center
    ${fullWidth ? "w-full" : ""}
    ${showContainerBorder
            ? `border-b ${containerBorderColor}`
            : ""
        }
    ${className}
  `;

    // ==========================================
    // TAB STYLE
    // ==========================================

    const getTabClasses = (isActive) => {
        /*
          1. SIMPLE
          ----------------------------
          Dashboard  Workout  Message
        */

        if (variant === "simple") {
            return `
        ${currentSize.tab}
        ${isActive ? activeColor : color}
        ${isActive ? "" : hoverColor}
        ${bgColor}
        transition-colors
        duration-200
      `;
        }

        /*
          2. UNDERLINE
          ----------------------------
          Dashboard  Workout  Message
                            ━━━━━━━
        */

        if (variant === "underline") {
            return `
        relative
        ${currentSize.tab}
        border-b-2
        -mb-px
        ${isActive
                    ? `${activeColor} ${activeBorderColor}`
                    : `border-transparent ${color} ${hoverColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          3. SHORT UNDERLINE
          ----------------------------
                Message
                ━━━━━
        */

        if (variant === "shortUnderline") {
            return `
        relative
        ${currentSize.tab}
        ${isActive ? activeColor : `${color} ${hoverColor}`}
        transition-colors
        duration-200

        after:absolute
        after:left-1/2
        after:-translate-x-1/2
        after:-bottom-[1px]
        after:h-[3px]
        after:rounded-full
        after:transition-all
        after:duration-200

        ${isActive
                    ? `after:w-10 ${activeBorderColor.replace(
                        "border-",
                        "after:bg-"
                    )}`
                    : "after:w-0"
                }
      `;
        }

        /*
          4. SOFT
          ----------------------------
          ┌──────────┐
          │ Message  │
          └──────────┘
        */

        if (variant === "soft") {
            return `
        ${currentSize.tab}
        rounded
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor} ${hoverBgColor}`
                }
        transition-colors
        duration-200
      `;
        }

        //   5. PILL

        if (variant === "pill") {
            return `
        ${currentSize.tab}
        rounded-full
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor} ${hoverBgColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          6. BOX
          ----------------------------
          ┌──────────┐
          │ Message  │
          └──────────┘
        */

        if (variant === "box") {
            return `
        ${currentSize.tab}
        border
        ${isActive
                    ? `${activeColor} ${activeBgColor} ${activeBorderColor}`
                    : `${color} ${borderColor} ${hoverColor} ${hoverBgColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          7. FILLED
          ----------------------------
          ┌──────────┐
          │ Message  │
          └──────────┘
        */

        if (variant === "filled") {
            return `
        ${currentSize.tab}
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor} ${hoverBgColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          8. ICON BOX
          ----------------------------
                 ┌─────┐
                 │ 🔥  │
                 └─────┘
        */

        if (variant === "iconBox") {
            return `
        ${currentSize.tab}
        rounded-lg
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor} ${hoverBgColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          9. ICON CIRCLE
        */

        if (variant === "iconCircle") {
            return `
        ${currentSize.tab}
        rounded-full
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor}`
                }
        transition-colors
        duration-200
      `;
        }

        /*
          10. DOT
          ----------------------------
          • Message
        */

        if (variant === "dot") {
            return `
        relative
        ${currentSize.tab}
        ${isActive
                    ? `${activeColor}`
                    : `${color} ${hoverColor}`
                }

        before:absolute
        before:left-1/2
        before:-translate-x-1/2
        before:-bottom-1

        before:rounded-full
        before:transition-all

        ${isActive
                    ? "before:w-1.5 before:h-1.5 before:bg-current"
                    : "before:w-0 before:h-0"
                }
      `;
        }

        /*
          11. SEGMENTED
          ----------------------------
          ┌────────┬────────┬────────┐
          │ Home   │Products│Contact │
          └────────┴────────┴────────┘
        */

        if (variant === "segmented") {
            return `
        ${currentSize.tab}
        flex-1
        justify-center
        border-r
        last:border-r-0
        ${isActive
                    ? `${activeColor} ${activeBgColor}`
                    : `${color} ${hoverColor} ${hoverBgColor}`
                }
        ${borderColor}
        transition-colors
        duration-200
      `;
        }

        /*
          DEFAULT
        */

        return `
      ${currentSize.tab}
      ${isActive ? activeColor : color}
    `;
    };

    // ==========================================
    // RENDER ITEM
    // ==========================================

    const renderItem = (item, isActive, extraProps = {}) => {
        return (
            <>
                {item.icon && (
                    <span className="shrink-0">
                        {item.icon}
                    </span>
                )}

                {item.label && (
                    <span>
                        {item.label}
                    </span>
                )}
            </>
        );
    };

    // ==========================================
    // NAVLINK
    // ==========================================

    if (type === "navlink") {
        return (
            <div className={containerClasses}>
                {items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) => `
              inline-flex
              items-center
              justify-center
              no-underline
              ${fullWidth ? "flex-1" : ""}
              ${getTabClasses(isActive)}
              ${tabClassName}
            `}
                    >
                        {renderItem(item)}
                    </NavLink>
                ))}
            </div>
        );
    }

    // ==========================================
    // BUTTON
    // ==========================================

    return (
        <div className={containerClasses}>
            {items.map((item) => {
                const isActive = selectedTab === item.value;

                return (
                    <button
                        key={item.value}
                        type="button"
                        disabled={item.disabled}
                        onClick={() => handleChange(item.value)}
                        className={`
              inline-flex
              items-center
              justify-center
              ${fullWidth ? "flex-1" : ""}
              disabled:cursor-not-allowed
              disabled:opacity-50
              ${getTabClasses(isActive)}
              ${tabClassName}
            `}
                    >
                        {renderItem(item, isActive)}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;