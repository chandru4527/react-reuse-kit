import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"spinner" | "ring" | "dots"} [props.variant="spinner"]
 * @param {"blue" | "red" | "green" | "yellow" | "gray" | "white" | "black" | string} [props.color="blue"]
 * @param {React.ReactNode} [props.text]
 * @param {boolean} [props.fullscreen=false]
 * @param {string} [props.className=""]
 * @param {string} [props.loaderClassName=""]
 * @param {string} [props.textClassName=""]
 * @param {string} [props.fullscreenClassName=""]
 */

const Loader = ({
    size = "md",
    variant = "spinner",
    color = "blue",
    text,
    fullscreen = false,
    className = "",
    loaderClassName = "",
    textClassName = "",
    fullscreenClassName = "",
    ...props
}) => {
    const sizes = {
        xs: "h-3 w-3 border-2",
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-4",
        xl: "h-12 w-12 border-4",
    };

    const dotSizes = {
        xs: "h-1.5 w-1.5",
        sm: "h-2 w-2",
        md: "h-2.5 w-2.5",
        lg: "h-3 w-3",
        xl: "h-3.5 w-3.5",
    };

    const colors = {
        blue: "border-blue-200 border-t-blue-600",
        red: "border-red-200 border-t-red-600",
        green: "border-green-200 border-t-green-600",
        yellow: "border-yellow-200 border-t-yellow-600",
        gray: "border-gray-200 border-t-gray-600",
        white: "border-white/30 border-t-white",
        black: "border-gray-300 border-t-gray-900",
    };

    const dotColors = {
        blue: "bg-blue-600",
        red: "bg-red-600",
        green: "bg-green-600",
        yellow: "bg-yellow-600",
        gray: "bg-gray-600",
        white: "bg-white",
        black: "bg-gray-900",
    };

    const variantClasses = {
        spinner: "rounded-full animate-spin",
        ring: "rounded-full border-dashed animate-spin",
    };

    const isCustomColor = !colors[color];

    const loaderStyle = isCustomColor
        ? {
            borderColor: `${color}33`,
            borderTopColor: color,
        }
        : {};

    const dotStyle = isCustomColor
        ? { backgroundColor: color }
        : {};

    const currentSize = sizes[size] || sizes.md;
    const currentDotSize = dotSizes[size] || dotSizes.md;
    const currentColor = colors[color] || colors.blue;
    const currentDotColor = dotColors[color] || dotColors.blue;

    const renderLoader = () => {
        if (variant === "dots") {
            return (
                <div className="flex items-center gap-1">
                    <span
                        className={twMerge(
                            "rounded-full animate-bounce",
                            currentDotSize,
                            !isCustomColor && currentDotColor,
                            loaderClassName
                        )}
                        style={dotStyle}
                    />

                    <span
                        className={twMerge(
                            "rounded-full animate-bounce [animation-delay:-0.15s]",
                            currentDotSize,
                            !isCustomColor && currentDotColor,
                            loaderClassName
                        )}
                        style={dotStyle}
                    />

                    <span
                        className={twMerge(
                            "rounded-full animate-bounce [animation-delay:-0.3s]",
                            currentDotSize,
                            !isCustomColor && currentDotColor,
                            loaderClassName
                        )}
                        style={dotStyle}
                    />
                </div>
            );
        }

        return (
            <span
                className={twMerge(
                    currentSize,
                    !isCustomColor && currentColor,
                    variantClasses[variant] || variantClasses.spinner,
                    loaderClassName
                )}
                style={loaderStyle}
            />
        );
    };

    const loader = (
        <div
            className={twMerge(
                "flex items-center justify-center gap-2",
                className
            )}
            {...props}
        >
            {renderLoader()}

            {text && (
                <span
                    className={twMerge(
                        "text-sm text-gray-600",
                        textClassName
                    )}
                >
                    {text}
                </span>
            )}
        </div>
    );

    if (fullscreen) {
        return (
            <div
                className={twMerge(
                    "fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm",
                    fullscreenClassName
                )}
            >
                {loader}
            </div>
        );
    }

    return loader;
};

export default Loader;