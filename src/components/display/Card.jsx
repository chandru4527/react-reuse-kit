import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

/**
 * Reusable Card Component
 *
 * @param {string} image - Card image URL
 * @param {string} imageAlt - Image alt text
 * @param {"top" | "bottom" | "left" | "right"} imagePosition - Image position
 * @param {string} imageClassName - Image custom classes
 * @param {React.ElementType} icon - Icon component from react-icons/md
 * @param {string} iconClassName - Icon wrapper custom classes
 * @param {React.ReactNode} badge - Badge content
 * @param {string} badgeClassName - Badge custom classes
 * @param {string} title - Card title
 * @param {string} titleClassName - Title custom classes
 * @param {string} description - Card description
 * @param {string} descriptionClassName - Description custom classes
 * @param {string | number} value - Stat card value
 * @param {string} valueClassName - Value custom classes
 * @param {React.ReactNode} header - Custom card header
 * @param {React.ReactNode} footer - Custom card footer
 * @param {Array} actions - Card action buttons
 * @param {React.ReactNode} children - Card body content
 * @param {"default" | "stat"} variant - Card variant
 * @param {boolean} loading - Loading state
 * @param {boolean} clickable - Whether the card is clickable
 * @param {Function} onClick - Card click handler
 * @param {boolean} darkMode - Enable dark mode
 * @param {"auto" | "xs" | "sm" | "md" | "lg" | "xl" | "full"} width - Card width
 * @param {string} className - Card custom classes
 */
const Card = ({
  image,
  imageAlt = "",
  imagePosition = "top",
  imageClassName = "",
  icon: Icon,
  iconClassName = "",
  badge,
  badgeClassName = "",
  title,
  titleClassName = "",
  description,
  descriptionClassName = "",
  value,
  valueClassName = "",
  header,
  footer,
  actions = [],
  children,
  variant = "default",
  loading = false,
  clickable = false,
  onClick,
  darkMode = false,
  width = "auto",
  className = "",
}) => {
  const widths = {
    auto: "w-auto",
    xs: "w-full max-w-xs",
    sm: "w-full max-w-sm",
    md: "w-full max-w-md",
    lg: "w-full max-w-lg",
    xl: "w-full max-w-xl",
    full: "w-full",
  };

  const isStat = variant === "stat";

  const renderIcon = (size = 24) => {
    if (!Icon) return null;
    return <Icon size={size} className="shrink-0" />;
  };

  const theme = {
    card: darkMode
      ? "border-gray-700 bg-gray-900 text-gray-100"
      : "border-gray-200 bg-white text-gray-900",
    title: darkMode ? "text-gray-100" : "text-gray-900",
    description: darkMode ? "text-gray-400" : "text-gray-600",
    divider: darkMode ? "border-gray-700" : "border-gray-200",
    iconWrapper: darkMode
      ? "bg-gray-800 text-gray-200"
      : "bg-gray-100 text-gray-700",
    value: darkMode ? "text-white" : "text-gray-900",
  };

  const cardClasses = twMerge(
    "relative overflow-hidden rounded-xl border shadow-sm transition-all duration-200",
    theme.card,
    clickable && "cursor-pointer hover:-translate-y-0.5 hover:shadow-md",
    widths[width] || widths.auto,
    className
  );

  const handleActionClick = (event, action) => {
    event.stopPropagation();
    action.onClick?.(event);
  };

  const renderActions = () => {
    if (!actions.length) return null;

    return (
      <div className="flex flex-wrap items-center gap-2">
        {actions.map((action, index) => (
          <Button
            key={action.key || index}
            type={action.type || "button"}
            variant={action.variant || "outline"}
            size={action.size || "sm"}
            shape={action.shape || "default"}
            icon={action.icon}
            iconPosition={action.iconPosition || "left"}
            iconSize={action.iconSize}
            iconClassName={action.iconClassName}
            loading={action.loading}
            loadingText={action.loadingText}
            disabled={action.disabled}
            fullWidth={action.fullWidth}
            title={action.title}
            className={action.className}
            onClick={(event) => handleActionClick(event, action)}
          >
            {action.label}
          </Button>
        ))}
      </div>
    );
  };

  const renderImage = () => {
    if (!image) return null;

    return (
      <div
        className={twMerge(
          "shrink-0 overflow-hidden",
          imagePosition === "left" || imagePosition === "right"
            ? "h-full w-1/3"
            : "w-full",
          imageClassName
        )}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    );
  };

  if (loading) {
    return (
      <div
        className={twMerge(
          "animate-pulse overflow-hidden rounded-xl border p-5 shadow-sm",
          theme.card,
          widths[width] || widths.auto,
          className
        )}
      >
        <div className="mb-4 h-40 rounded-lg bg-gray-300/70 dark:bg-gray-700" />
        <div className="mb-3 h-5 w-2/3 rounded bg-gray-300/70 dark:bg-gray-700" />
        <div className="mb-2 h-4 w-full rounded bg-gray-300/70 dark:bg-gray-700" />
        <div className="h-4 w-4/5 rounded bg-gray-300/70 dark:bg-gray-700" />
        <div className="mt-5 h-9 w-24 rounded bg-gray-300/70 dark:bg-gray-700" />
      </div>
    );
  }

  if (isStat) {
    return (
      <div
        className={cardClasses}
        onClick={onClick}
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={
          clickable
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onClick?.(event);
                }
              }
            : undefined
        }
      >
        <div className="flex items-start justify-between gap-4 p-5">
          <div className="min-w-0 flex-1">
            {title && (
              <p
                className={twMerge(
                  "text-sm font-medium",
                  theme.description,
                  titleClassName
                )}
              >
                {title}
              </p>
            )}

            {value !== undefined && value !== null && (
              <p
                className={twMerge(
                  "mt-2 text-2xl font-bold tracking-tight",
                  theme.value,
                  valueClassName
                )}
              >
                {value}
              </p>
            )}

            {description && (
              <p
                className={twMerge(
                  "mt-2 text-sm",
                  theme.description,
                  descriptionClassName
                )}
              >
                {description}
              </p>
            )}
          </div>

          {Icon && (
            <div
              className={twMerge(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                theme.iconWrapper,
                iconClassName
              )}
            >
              {renderIcon(30)}
            </div>
          )}
        </div>

        {children && <div className="px-5 pb-5">{children}</div>}

        {footer && (
          <div className={twMerge("border-t px-5 py-3", theme.divider)}>
            {footer}
          </div>
        )}
      </div>
    );
  }

  const isHorizontal =
    imagePosition === "left" || imagePosition === "right";

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick?.(event);
              }
            }
          : undefined
      }
    >
      {header && (
        <div className={twMerge("border-b px-5 py-4", theme.divider)}>
          {header}
        </div>
      )}

      <div
        className={twMerge(
          isHorizontal && "flex",
          imagePosition === "right" && "flex-row-reverse"
        )}
      >
        {imagePosition !== "bottom" && renderImage()}

        <div className="min-w-0 flex-1 p-5">
          {badge && (
            <div className="mb-3">
              <span
                className={twMerge(
                  "inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700",
                  badgeClassName
                )}
              >
                {badge}
              </span>
            </div>
          )}

          {Icon && (
            <div
              className={twMerge(
                "mb-3 inline-flex items-center justify-center text-gray-700 dark:text-gray-200",
                iconClassName
              )}
            >
              {renderIcon()}
            </div>
          )}

          {title && (
            <h3
              className={twMerge(
                "text-lg font-semibold",
                theme.title,
                titleClassName
              )}
            >
              {title}
            </h3>
          )}

          {description && (
            <p
              className={twMerge(
                "mt-2 text-sm leading-6",
                theme.description,
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}

          {children && (
            <div className={twMerge("mt-4", theme.description)}>
              {children}
            </div>
          )}

          {renderActions()}
        </div>

        {imagePosition === "bottom" && renderImage()}
      </div>

      {footer && (
        <div className={twMerge("border-t px-5 py-4", theme.divider)}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;