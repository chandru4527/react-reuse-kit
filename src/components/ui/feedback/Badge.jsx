import { twMerge } from "tailwind-merge";

const Badge = ({
    children,
    variant = "default",
    size = "md",
    rounded = "full",
    dot = false,
    className = "",
    ...props
}) => {
    const variants = {
        default: "bg-gray-100 text-gray-800 border border-gray-200",
        primary: "bg-blue-100 text-blue-700 border border-blue-200",
        success: "bg-green-100 text-green-700 border border-green-200",
        danger: "bg-red-100 text-red-700 border border-red-200",
        warning: "bg-yellow-100 text-yellow-700 border border-yellow-200",
        info: "bg-cyan-100 text-cyan-700 border border-cyan-200",
        purple: "bg-purple-100 text-purple-700 border border-purple-200",
        pink: "bg-pink-100 text-pink-700 border border-pink-200",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const dotColors = {
        default: "bg-gray-500",
        primary: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-cyan-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
    };

    return (
        <span
            className={twMerge(
                "inline-flex items-center gap-1 font-medium",
                variants[variant],
                sizes[size],
                roundedStyles[rounded],
                className
            )}
            {...props}
        >
            {dot && (
                <span
                    className={twMerge(
                        "h-2 w-2 shrink-0 rounded-full",
                        dotColors[variant]
                    )}
                />
            )}

            {children}
        </span>
    );
};

export default Badge;