import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { twMerge } from "tailwind-merge";

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
    separatorClassName = "",

    // Home icon
    showHomeIcon = false,

    ...props
}) => {
    const sizes = {
        sm: {
            wrapper: "text-xs gap-1.5",
            item: "gap-1",
            separator: "mx-1",
            icon: "text-sm",
        },
        md: {
            wrapper: "text-sm gap-2",
            item: "gap-1.5",
            separator: "mx-1.5",
            icon: "text-base",
        },
        lg: {
            wrapper: "text-base gap-2.5",
            item: "gap-2",
            separator: "mx-2",
            icon: "text-lg",
        },
    };

    const currentSize = sizes[size] || sizes.md;

    return (
        <nav
            aria-label="Breadcrumb"
            className={twMerge(
                "flex flex-wrap items-center",
                currentSize.wrapper,
                className
            )}
            {...props}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                const icon =
                    item.icon ||
                    (showHomeIcon && index === 0 ? (
                        <MdHome className={currentSize.icon} />
                    ) : null);

                const itemClasses = twMerge(
                    "inline-flex items-center",
                    currentSize.item,
                    color,
                    hoverColor,
                    "no-underline transition-colors duration-200",
                    itemClassName,
                    item.className
                );

                const currentClasses = twMerge(
                    "inline-flex items-center",
                    currentSize.item,
                    currentColor,
                    currentClassName,
                    item.className
                );

                return (
                    <div
                        key={`${item.label}-${index}`}
                        className="flex items-center"
                    >
                        {isLast ? (
                            <span
                                aria-current="page"
                                className={currentClasses}
                            >
                                {icon && (
                                    <span className="shrink-0">
                                        {icon}
                                    </span>
                                )}

                                {item.label}
                            </span>
                        ) : (
                            <Link
                                to={item.to}
                                className={itemClasses}
                            >
                                {icon && (
                                    <span className="shrink-0">
                                        {icon}
                                    </span>
                                )}

                                {item.label}
                            </Link>
                        )}

                        {!isLast && (
                            <span
                                aria-hidden="true"
                                className={twMerge(
                                    color,
                                    currentSize.separator,
                                    separatorClassName
                                )}
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