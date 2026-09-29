import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {number} [props.value=0]
 * @param {number} [props.max=100]
 * @param {React.ReactNode} [props.label]
 * @param {boolean} [props.showValue=true]
 * @param {"linear" | "circle"} [props.variant="linear"]
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"blue" | "green" | "red" | "yellow" | "purple" | "pink" | "gray" | string} [props.color="blue"]
 * @param {"gray" | "blue" | "green" | "red" | "yellow" | "purple" | "pink" | string} [props.trackColor="gray"]
 * @param {"none" | "sm" | "md" | "lg" | "full"} [props.rounded="full"]
 * @param {boolean} [props.animated=false]
 * @param {boolean} [props.indeterminate=false]
 * @param {string} [props.className=""]
 * @param {string} [props.barClassName=""]
 * @param {string} [props.labelClassName=""]
 * @param {string} [props.valueClassName=""]
 */
const ProgressBar = ({
    value = 0,
    max = 100,
    label,
    showValue = true,
    variant = "linear",
    size = "md",
    color = "blue",
    trackColor = "gray",
    rounded = "full",
    animated = false,
    indeterminate = false,
    className = "",
    barClassName = "",
    labelClassName = "",
    valueClassName = "",
    ...props
}) => {
    const safeMax = max > 0 ? max : 100;

    const percentage = Math.min(
        100,
        Math.max(0, (value / safeMax) * 100)
    );

    /* -----------------------------
       Linear Colors
    ----------------------------- */

    const linearColors = {
        blue: "bg-blue-600",
        green: "bg-green-600",
        red: "bg-red-600",
        yellow: "bg-yellow-500",
        purple: "bg-purple-600",
        pink: "bg-pink-600",
        gray: "bg-gray-600",
    };

    const linearTrackColors = {
        gray: "bg-gray-200",
        blue: "bg-blue-100",
        green: "bg-green-100",
        red: "bg-red-100",
        yellow: "bg-yellow-100",
        purple: "bg-purple-100",
        pink: "bg-pink-100",
    };

    /* -----------------------------
       Sizes
    ----------------------------- */

    const linearSizes = {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
        xl: "h-6",
    };

    const circleSizes = {
        sm: "h-16 w-16",
        md: "h-24 w-24",
        lg: "h-32 w-32",
        xl: "h-40 w-40",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    /* -----------------------------
       Circle Colors
    ----------------------------- */

    const circleColors = {
        blue: "#2563eb",
        green: "#16a34a",
        red: "#dc2626",
        yellow: "#eab308",
        purple: "#9333ea",
        pink: "#db2777",
        gray: "#4b5563",
    };

    const circleTrackColors = {
        gray: "#e5e7eb",
        blue: "#dbeafe",
        green: "#dcfce7",
        red: "#fee2e2",
        yellow: "#fef9c3",
        purple: "#f3e8ff",
        pink: "#fce7f3",
    };

    /* -----------------------------
       Circle Progress
    ----------------------------- */

    if (variant === "circle") {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        const offset =
            circumference - (percentage / 100) * circumference;

        const circleColor =
            circleColors[color] || color;

        const circleTrackColor =
            circleTrackColors[trackColor] || trackColor;

        return (
            <div
                className={twMerge(
                    "flex flex-col items-center justify-center",
                    className
                )}
                {...props}
            >
                <div
                    className={twMerge(
                        "relative",
                        circleSizes[size] || circleSizes.md
                    )}
                >
                    <svg
                        className="h-full w-full -rotate-90"
                        viewBox="0 0 100 100"
                    >
                        {/* Track */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={circleTrackColor}
                            strokeWidth="8"
                        />

                        {/* Progress */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={circleColor}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={
                                indeterminate
                                    ? circumference * 0.75
                                    : offset
                            }
                            className={twMerge(
                                "transition-all duration-500",
                                indeterminate &&
                                "animate-spin"
                            )}
                        />
                    </svg>

                    {/* Percentage */}
                    {showValue && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className={twMerge(
                                    "font-semibold text-gray-800",
                                    size === "sm" && "text-xs",
                                    size === "md" && "text-sm",
                                    size === "lg" && "text-lg",
                                    size === "xl" && "text-2xl",
                                    valueClassName
                                )}
                            >
                                {Math.round(percentage)}%
                            </span>
                        </div>
                    )}
                </div>

                {label && (
                    <span
                        className={twMerge(
                            "mt-3 text-sm font-medium text-gray-700",
                            labelClassName
                        )}
                    >
                        {label}
                    </span>
                )}
            </div>
        );
    }

    /* -----------------------------
       Linear Progress
    ----------------------------- */

    const isCustomColor = !linearColors[color];
    const isCustomTrackColor = !linearTrackColors[trackColor];

    const progressStyle = isCustomColor
        ? { backgroundColor: color }
        : {};

    const trackStyle = isCustomTrackColor
        ? { backgroundColor: trackColor }
        : {};

    return (
        <div
            className={twMerge(
                "w-full",
                className
            )}
            {...props}
        >
            {/* Label */}
            {(label || showValue) && (
                <div className="mb-2 flex items-center justify-between gap-3">
                    {label && (
                        <span
                            className={twMerge(
                                "text-sm font-medium text-gray-700",
                                labelClassName
                            )}
                        >
                            {label}
                        </span>
                    )}

                    {showValue && (
                        <span
                            className={twMerge(
                                "text-sm font-medium text-gray-600",
                                valueClassName
                            )}
                        >
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}

            {/* Track */}
            <div
                className={twMerge(
                    "w-full overflow-hidden",
                    linearSizes[size] || linearSizes.md,
                    !isCustomTrackColor &&
                    (linearTrackColors[trackColor] ||
                        linearTrackColors.gray),
                    roundedStyles[rounded] || roundedStyles.full
                )}
                style={trackStyle}
            >
                {/* Progress */}
                <div
                    className={twMerge(
                        "h-full transition-all duration-500",
                        !isCustomColor &&
                        (linearColors[color] ||
                            linearColors.blue),
                        animated && "animate-pulse",
                        indeterminate &&
                        "w-1/3 animate-[progress_1.5s_ease-in-out_infinite]",
                        roundedStyles[rounded] ||
                        roundedStyles.full,
                        barClassName
                    )}
                    style={{
                        ...progressStyle,
                        width: indeterminate
                            ? undefined
                            : `${percentage}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;