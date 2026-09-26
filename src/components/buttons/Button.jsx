import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {"button" | "submit" | "reset"} [props.type="button"]
 * @param {"normal" | "primary" | "secondary" | "success" | "danger" | "warning" | "outline" | "ghost"} [props.variant="primary"]
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"default" | "rounded" | "full" | "square"} [props.shape="default"]
 * @param {React.ElementType | React.ReactElement} [props.icon]
 * @param {"start" | "end"} [props.iconPosition="start"]
 * @param {number} [props.iconSize=20]
 * @param {string} [props.iconClassName=""]
 * @param {boolean} [props.loading=false]
 * @param {string} [props.loadingText="Loading..."]
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.fullWidth=false]
 * @param {string} [props.className=""]
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick]
 */

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  shape = "default",
  icon: Icon,
  iconPosition = "start",
  iconSize = 20,
  iconClassName = "",
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex flex-row items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-70 cursor-pointer";

  const variants = {
    normal: "",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    ghost: "text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-lg",
  };

  const shapes = {
    default: "rounded-md",
    rounded: "rounded-lg",
    full: "rounded-full",
    square: "rounded-none",
  };

  const renderIcon = () => {
    if (!Icon) return null;

    if (React.isValidElement(Icon)) {
      return React.cloneElement(Icon, {
        size: Icon.props.size || iconSize,
        className: twMerge(
          "shrink-0",
          Icon.props.className,
          iconClassName
        ),
      });
    }

    return (
      <Icon
        size={iconSize}
        className={twMerge("shrink-0", iconClassName)}
      />
    );
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        shapes[shape],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent" />
          {loadingText && <span>{loadingText}</span>}
        </>
      ) : (
        <>
          {Icon && iconPosition === "start" && renderIcon()}

          {children}

          {Icon && iconPosition === "end" && renderIcon()}
        </>
      )}
    </button>
  );
};

export default Button;