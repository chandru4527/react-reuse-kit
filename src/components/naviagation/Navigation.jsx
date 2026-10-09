import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Navigation = ({
  type = "navlink",
  to,
  href,
  children,
  icon: Icon,

  // Inactive
  color = "text-gray-600",
  bgColor = "bg-transparent",

  // Active
  activeColor = "text-white",
  activeBgColor = "bg-blue-600",

  // Hover
  hoverColor = "hover:text-gray-900",
  hoverBgColor = "hover:bg-gray-100",

  // Size
  size = "md",

  // Icon
  iconSize,
  iconClassName = "",

  // Custom
  className = "",

  // <a> props
  target,
  rel,

  ...props
}) => {
  const sizes = {
    sm: {
      wrapper: "px-3 py-1.5 text-sm gap-2",
      icon: "text-base",
    },
    md: {
      wrapper: "px-4 py-2.5 text-sm gap-2",
      icon: "text-lg",
    },
    lg: {
      wrapper: "px-5 py-3 text-base gap-2.5",
      icon: "text-xl",
    },
  };

  const currentSize = sizes[size] || sizes.md;

  const baseClass = twMerge(
    "inline-flex items-center rounded-lg font-medium transition-colors duration-200 no-underline",
    currentSize.wrapper,
    className
  );

  const renderContent = () => (
    <>
      {Icon && (
        <Icon
          size={iconSize}
          className={twMerge("shrink-0", currentSize.icon, iconClassName)}
        />
      )}

      {children}
    </>
  );

  // External / normal <a>
  if (type === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={twMerge(
          baseClass,
          color,
          bgColor,
          hoverColor,
          hoverBgColor
        )}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  // React Router <Link>
  if (type === "link") {
    return (
      <Link
        to={to}
        className={twMerge(
          baseClass,
          color,
          bgColor,
          hoverColor,
          hoverBgColor
        )}
        {...props}
      >
        {renderContent()}
      </Link>
    );
  }

  // React Router <NavLink>
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          baseClass,
          isActive
            ? `${activeBgColor} ${activeColor}`
            : `${bgColor} ${color} ${hoverColor} ${hoverBgColor}`
        )
      }
      {...props}
    >
      {renderContent()}
    </NavLink>
  );
};

export default Navigation;