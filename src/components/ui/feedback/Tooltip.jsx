import { useState } from "react";

const Tooltip = ({
    children,
    content,
    position = "top",
    size = "md",
    rounded = "md",
    bgColor = "dark",
    textColor = "white",
    disabled = false,
}) => {
    const [show, setShow] = useState(false);

    // Position
    const positions = {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2",
    };

    // Size
    const sizes = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base"
    };

    // Rounded
    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
    }

    // Background
    const backgrounds = {
        dark: "bg-gray-900",
        light: "bg-white",
        primary: "bg-blue-600",
        success: "bg-green-600",
        danger: "bg-red-600",
        warning: "bg-yellow-500",
    }

    // Text color
    const textColors = {
        white: "text-white",
        black: "text-black",
        gray: "text-gray-700",
    };

    if (disabled) {
        return children;
    }

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {/* Trigger */}
            {children}

            {/* Tooltip */}
            {show && (
                <div
                    role="tooltip"
                    className={` absolute z-50  whitespace-nowrap  font-medium  shadow-md cursor-pointer

            ${positions[position]}
            ${sizes[size]}
            ${roundedStyles[rounded]}
            ${backgrounds[bgColor]}
            ${textColors[textColor]}
          `}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;