import React, { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.content
 * @param {"top" | "bottom" | "left" | "right"} [props.position="top"]
 * @param {"sm" | "md" | "lg"} [props.size="md"]
 * @param {"none" | "sm" | "md" | "lg" | "xl" | "full"} [props.rounded="md"]
 * @param {"dark" | "light" | "primary" | "success" | "danger" | "warning"} [props.bgColor="dark"]
 * @param {"white" | "black" | "gray"} [props.textColor="white"]
 * @param {boolean} [props.showArrow=true]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className=""]
 * @param {string} [props.contentClassName=""]
 */
const Tooltip = ({
    children,
    content,
    position = "top",
    size = "md",
    rounded = "md",
    bgColor = "dark",
    textColor = "white",
    showArrow = true,
    disabled = false,
    className = "",
    contentClassName = "",
    ...props
}) => {
    const [show, setShow] = useState(false);
    const tooltipId = useId();

    const positions = {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2",
    };

    const arrowPositions = {
        top: "left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900",
        bottom: "left-1/2 bottom-full -translate-x-1/2 border-x-4 border-b-4 border-x-transparent border-b-gray-900",
        left: "left-full top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900",
        right: "right-full top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-gray-900",
    };

    const sizes = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
    };

    const backgrounds = {
        dark: "bg-gray-900",
        light: "bg-white",
        primary: "bg-blue-600",
        success: "bg-green-600",
        danger: "bg-red-600",
        warning: "bg-yellow-500",
    };

    const textColors = {
        white: "text-white",
        black: "text-black",
        gray: "text-gray-700",
    };

    const arrowColors = {
        dark: "border-t-gray-900",
        light: "border-t-white",
        primary: "border-t-blue-600",
        success: "border-t-green-600",
        danger: "border-t-red-600",
        warning: "border-t-yellow-500",
    };

    if (disabled) {
        return children;
    }

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            {...props}
        >
            {React.isValidElement(children)
                ? React.cloneElement(children, {
                    "aria-describedby": show ? tooltipId : undefined,
                })
                : children}

            {show && content && (
                <div
                    id={tooltipId}
                    role="tooltip"
                    className={twMerge(
                        "pointer-events-none absolute z-50 whitespace-nowrap font-medium shadow-md",
                        positions[position] || positions.top,
                        sizes[size] || sizes.md,
                        roundedStyles[rounded] || roundedStyles.md,
                        backgrounds[bgColor] || backgrounds.dark,
                        textColors[textColor] || textColors.white,
                        contentClassName
                    )}
                >
                    {content}

                    {showArrow && (
                        <span
                            className={twMerge(
                                "absolute h-0 w-0 border-solid",
                                arrowPositions[position],
                                position !== "top" && "border-t-transparent",
                                arrowColors[bgColor]
                            )}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Tooltip;