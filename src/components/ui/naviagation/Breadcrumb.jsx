import { Link } from "react-router-dom";

const Breadcrumb = ({
    items = [],

    // Separator
    separator = "/",

    // Size
    size = "md",

    // Colors
    color = "text-gray-500",
    hoverColor = "hover:text-gray-900",
    currentColor = "text-gray-900",

    // Custom classes
    className = "",
    itemClassName = "",
    currentClassName = "",

    // Show home icon if item has no icon
    showHomeIcon = false,
}) => {
    const sizes = {
        sm: {
            wrapper: "text-xs gap-1.5",
            item: "gap-1",
            separator: "mx-1",
        },

        md: {
            wrapper: "text-sm gap-2",
            item: "gap-1.5",
            separator: "mx-1.5",
        },

        lg: {
            wrapper: "text-base gap-2.5",
            item: "gap-2",
            separator: "mx-2",
        },
    };

    const currentSize = sizes[size];

    return (
        <nav
            aria-label="Breadcrumb"
            className={`
        flex
        items-center
        flex-wrap
        ${currentSize.wrapper}
        ${className}
      `}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div
                        key={`${item.label}-${index}`}
                        className="flex items-center"
                    >
                        {/* =========================
                BREADCRUMB ITEM
            ========================== */}

                        {isLast ? (
                            // Current page
                            <span
                                aria-current="page"
                                className={`
                  inline-flex
                  items-center
                  ${currentSize.item}
                  ${currentColor}
                  ${currentClassName}
                `}
                            >
                                {item.icon && (
                                    <span className="shrink-0">
                                        {item.icon}
                                    </span>
                                )}

                                {item.label}
                            </span>
                        ) : (
                            // Previous page
                            <Link
                                to={item.to}
                                className={`
                  inline-flex
                  items-center
                  ${currentSize.item}
                  ${color}
                  ${hoverColor}
                  no-underline
                  transition-colors
                  duration-200
                  ${itemClassName}
                `}
                            >
                                {item.icon && (
                                    <span className="shrink-0">
                                        {item.icon}
                                    </span>
                                )}

                                {item.label}
                            </Link>
                        )}

                        {/* =========================
                SEPARATOR
            ========================== */}

                        {!isLast && (
                            <span
                                aria-hidden="true"
                                className={`
                  ${color}
                  ${currentSize.separator}
                `}
                            >
                                {separator}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
