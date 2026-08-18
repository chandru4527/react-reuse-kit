import { Link, NavLink } from "react-router-dom";

const Navigation = ({
  type = "navlink",

  to,
  href,

  children,
  icon,

  // Inactive state
  color = "text-gray-600",
  bgColor = "bg-transparent",

  // Active state
  activeColor = "text-white",
  activeBgColor = "bg-blue-600",

  // Hover
  hoverColor = "hover:text-gray-900",
  hoverBgColor = "hover:bg-gray-100",

  // Size
  size = "md",

  // Custom classes
  className = "",

  // <a> props
  target,
  rel,

  ...props
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-2",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-5 py-3 text-base gap-2.5",
  };

  const baseClass = `
    inline-flex
    items-center
    rounded-lg
    font-medium
    transition-colors
    duration-200
    no-underline
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {icon && (
        <span className="shrink-0">
          {icon}
        </span>
      )}

      {children}
    </>
  );

  // ==========================================
  // A TAG
  // ==========================================

  if (type === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`
          ${baseClass}
          ${color}
          ${bgColor}
          ${hoverColor}
          ${hoverBgColor}
        `}
        {...props}
      >
        {content}
      </a>
    );
  }

  // ==========================================
  // LINK
  // ==========================================

  if (type === "link") {
    return (
      <Link
        to={to}
        className={`
          ${baseClass}
          ${color}
          ${bgColor}
          ${hoverColor}
          ${hoverBgColor}
        `}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // ==========================================
  // NAVLINK
  // ==========================================

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        ${baseClass}

        ${
          isActive
            ? `${activeBgColor} ${activeColor}`
            : `${bgColor} ${color} ${hoverColor} ${hoverBgColor}`
        }
      `}
      {...props}
    >
      {content}
    </NavLink>
  );
};

export default Navigation;