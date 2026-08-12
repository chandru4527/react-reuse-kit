import React from "react";

const Button = ({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    loading = false,
    loadingText = "Loading...",
    disabled = false,
    onClick,
    className = "",
}) => {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
        info: "bg-cyan-600 hover:bg-cyan-700 text-white",
        outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
        link: "bg-transparent text-blue-600 hover:text-blue-700 underline p-0 h-auto",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs rounded",
        md: "px-4 py-2 text-sm rounded",
        lg: "px-5 py-2.5 text-base rounded",
        xl: "px-6 py-3 text-lg rounded",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading || disabled}
            className={`inline-flex items-center justify-center font-medium transition duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${loading || disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
        >
            {loading ? loadingText : children}
        </button>
    );
};

export default Button;