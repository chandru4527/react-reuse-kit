import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"blue" | "green" | "red" | "yellow" | "gray" | "white" | string} [props.color="blue"]
 * @param {"spinner" | "ring" | "dots" | "bars" | "pulse" | "dual" | "orbit"} [props.variant="spinner"]
 * @param {string} [props.className=""]
 */
const Spinner = ({
  size = "md",
  color = "blue",
  variant = "spinner",
  className = "",
  ...props
}) => {
  const sizes = {
    xs: { box: "h-3 w-3", border: "border", dot: "h-1 w-1", bar: "w-0.5 h-2" },
    sm: { box: "h-4 w-4", border: "border-2", dot: "h-1.5 w-1.5", bar: "w-0.5 h-3" },
    md: { box: "h-5 w-5", border: "border-2", dot: "h-2 w-2", bar: "w-1 h-4" },
    lg: { box: "h-7 w-7", border: "border-[3px]", dot: "h-2.5 w-2.5", bar: "w-1 h-5" },
    xl: { box: "h-10 w-10", border: "border-4", dot: "h-3 w-3", bar: "w-1.5 h-7" },
  };

  const colors = {
    blue: { border: "border-gray-300 border-t-blue-600", dot: "bg-blue-600", bar: "bg-blue-600", pulse: "bg-blue-600", ring: "#2563eb", track: "#bfdbfe" },
    green: { border: "border-gray-300 border-t-green-600", dot: "bg-green-600", bar: "bg-green-600", pulse: "bg-green-600", ring: "#16a34a", track: "#bbf7d0" },
    red: { border: "border-gray-300 border-t-red-600", dot: "bg-red-600", bar: "bg-red-600", pulse: "bg-red-600", ring: "#dc2626", track: "#fecaca" },
    yellow: { border: "border-gray-300 border-t-yellow-500", dot: "bg-yellow-500", bar: "bg-yellow-500", pulse: "bg-yellow-500", ring: "#eab308", track: "#fef08a" },
    gray: { border: "border-gray-300 border-t-gray-600", dot: "bg-gray-600", bar: "bg-gray-600", pulse: "bg-gray-600", ring: "#4b5563", track: "#d1d5db" },
    white: { border: "border-white/40 border-t-white", dot: "bg-white", bar: "bg-white", pulse: "bg-white", ring: "#ffffff", track: "rgba(255,255,255,0.35)" },
  };

  const currentSize = sizes[size] || sizes.md;
  const currentColor = colors[color];
  const isCustomColor = !currentColor;
  const customStyle = isCustomColor ? { backgroundColor: color } : undefined;
  const dotClass = currentColor?.dot || "";
  const barClass = currentColor?.bar || "";
  const pulseClass = currentColor?.pulse || "";
  const borderClass = currentColor?.border || "";

  const rootClass = "inline-flex items-center justify-center";

  if (variant === "dots") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, "gap-1", className)} {...props}>
        <span aria-hidden="true" className={twMerge("rounded-full animate-bounce [animation-delay:-0.3s]", currentSize.dot, dotClass)} style={customStyle} />
        <span aria-hidden="true" className={twMerge("rounded-full animate-bounce [animation-delay:-0.15s]", currentSize.dot, dotClass)} style={customStyle} />
        <span aria-hidden="true" className={twMerge("rounded-full animate-bounce", currentSize.dot, dotClass)} style={customStyle} />
      </span>
    );
  }

  if (variant === "bars") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, "gap-1", className)} {...props}>
        {[0, 1, 2, 3, 4].map((bar) => (
          <span key={bar} aria-hidden="true" className={twMerge("rounded-full animate-[spinner-bars_1s_ease-in-out_infinite]", currentSize.bar, barClass)} style={{ ...customStyle, animationDelay: `${bar * 0.12}s` }} />
        ))}
      </span>
    );
  }

  if (variant === "pulse") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, className)} {...props}>
        <span aria-hidden="true" className={twMerge("rounded-full animate-ping opacity-75", currentSize.box, pulseClass)} style={customStyle} />
        <span aria-hidden="true" className={twMerge("absolute rounded-full", currentSize.box, pulseClass)} style={customStyle} />
      </span>
    );
  }

  if (variant === "ring") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, "relative", currentSize.box, className)} {...props}>
        <span aria-hidden="true" className={twMerge("absolute inset-0 rounded-full border-2 border-dashed animate-spin", !isCustomColor && "border-gray-300", className === "" && !isCustomColor && "border-t-blue-600")} style={isCustomColor ? { borderColor: `${color}66`, borderTopColor: color } : undefined} />
      </span>
    );
  }

  if (variant === "dual") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, "relative", currentSize.box, className)} {...props}>
        <span aria-hidden="true" className={twMerge("absolute inset-0 rounded-full border-2 border-t-transparent animate-spin", !isCustomColor && borderClass)} style={isCustomColor ? { borderColor: `${color}44`, borderTopColor: "transparent", borderRightColor: color } : undefined} />
        <span aria-hidden="true" className={twMerge("absolute inset-[20%] rounded-full border-2 border-b-transparent animate-[spin_1.2s_linear_infinite_reverse]", !isCustomColor && borderClass)} style={isCustomColor ? { borderColor: `${color}44`, borderBottomColor: "transparent", borderLeftColor: color } : undefined} />
      </span>
    );
  }

  if (variant === "orbit") {
    return (
      <span role="status" aria-label="Loading" className={twMerge(rootClass, "relative", currentSize.box, className)} {...props}>
        <span aria-hidden="true" className="absolute inset-0 animate-spin rounded-full">
          <span className={twMerge("absolute left-1/2 top-0 -translate-x-1/2 rounded-full", currentSize.dot, dotClass)} style={customStyle} />
        </span>
        <span aria-hidden="true" className="absolute inset-[20%] animate-[spin_1.5s_linear_infinite_reverse] rounded-full">
          <span className={twMerge("absolute left-1/2 top-0 -translate-x-1/2 rounded-full", currentSize.dot, dotClass)} style={customStyle} />
        </span>
      </span>
    );
  }

  // Default spinner
  return (
    <span
      role="status"
      aria-label="Loading"
      className={twMerge(
        "inline-block animate-spin rounded-full",
        currentSize.box,
        currentSize.border,
        !isCustomColor && borderClass,
        className
      )}
      style={isCustomColor ? { borderColor: `${color}33`, borderTopColor: color } : undefined}
      {...props}
    />
  );
};

export default Spinner;