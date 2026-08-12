import React from "react";

const Badge = ({
    children,
    variant = "default",
    size = "md",
    rounded = "full",
    dot = false,
    className = "",
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

    return (
        <span
            className={`inline-flex items-center gap-1 font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${roundedStyles[rounded]}
        ${className}`}
        >
            {dot && (
                <span
                    className={`h-2 w-2 rounded-full
            ${variant === "success"
                            ? "bg-green-500"
                            : variant === "danger"
                                ? "bg-red-500"
                                : variant === "warning"
                                    ? "bg-yellow-500"
                                    : variant === "primary"
                                        ? "bg-blue-500"
                                        : variant === "info"
                                            ? "bg-cyan-500"
                                            : variant === "purple"
                                                ? "bg-purple-500"
                                                : variant === "pink"
                                                    ? "bg-pink-500"
                                                    : "bg-gray-500"
                        }`}
                />
            )}

            {children}
        </span>
    );
};

export default Badge;