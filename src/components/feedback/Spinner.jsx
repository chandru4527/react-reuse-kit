import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"blue" | "green" | "red" | "yellow" | "gray" | "white" | string} [props.color="blue"]
 * @param {string} [props.className=""]
 */
const Spinner = ({
  size = "md",
  color = "blue",
  className = "",
  ...props
}) => {
  const sizes = {
    xs: "h-3 w-3 border",
    sm: "h-4 w-4 border-2",
    md: "h-5 w-5 border-2",
    lg: "h-7 w-7 border-[3px]",
    xl: "h-10 w-10 border-4",
  };

  const colors = {
    blue: "border-gray-300 border-t-blue-600",
    green: "border-gray-300 border-t-green-600",
    red: "border-gray-300 border-t-red-600",
    yellow: "border-gray-300 border-t-yellow-500",
    gray: "border-gray-300 border-t-gray-600",
    white: "border-white/40 border-t-white",
  };

  const isCustomColor = !colors[color];

  return (
    <span
      role="status"
      aria-label="Loading"
      className={twMerge(
        "inline-block animate-spin rounded-full",
        sizes[size] || sizes.md,
        !isCustomColor && colors[color],
        className
      )}
      style={
        isCustomColor
          ? {
            borderColor: `${color}33`,
            borderTopColor: color,
          }
          : undefined
      }
      {...props}
    />
  );
};

export default Spinner;