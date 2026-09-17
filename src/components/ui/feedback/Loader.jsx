import React from "react";
import { twMerge } from "tailwind-merge";

const Loader = ({
    size = "md",
    variant = "spinner",
    color = "blue",
    text,
    fullscreen = false,
    className = "",
    textClassName = "",
    ...props
}) => {
    const sizes = {
        xs: "w-3 h-3 border-2",
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-8 h-8 border-4",
        xl: "w-12 h-12 border-4",
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

    const isCustomColor = !colors[color];

    const loaderColor = isCustomColor
        ? {
            borderColor: `${color}33`,
            borderTopColor: color,
        }
        : {};

    const variantClasses = {
        spinner: "rounded-full animate-spin",
        ring: "rounded-full border-dashed animate-spin",
    };

    const loader = (
        <div
            className={twMerge(
                "flex items-center justify-center gap-2",
                className
            )}
            {...props}
        >
            {variant === "dots" ? (
                <div className="flex items-center gap-1">
                    <span
                        className="h-2 w-2 animate-bounce rounded-full"
                        style={isCustomColor ? { backgroundColor: color } : {}}
                    />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]"
                        style={isCustomColor ? { backgroundColor: color } : {}}
                    />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full"
                        style={isCustomColor ? { backgroundColor: color } : {}}
                    />
                </div>
            ) : (
                <span
                    className={twMerge(
                        sizes[size],
                        !isCustomColor && colors[color],
                        variantClasses[variant]
                    )}
                    style={loaderColor}
                />
            )}

            {text && (
                <span className={twMerge("text-sm text-gray-600", textClassName)}>
                    {text}
                </span>
            )}
        </div>
    );

    if (fullscreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                {loader}
            </div>
        );
    }

    return loader;
};

export default Loader;